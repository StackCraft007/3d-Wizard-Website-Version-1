const multer = require('multer');
const { google } = require('googleapis');
const path = require('path');
const fs = require('fs-extra');
const { v4: uuidv4 } = require('uuid');
const VolumeCalculatorService = require('../services/calculateVolume');
const cloudinary = require('cloudinary').v2;

if (process.env.NODE_ENV !== 'production') {
  console.log('quoteController loaded');
}

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const isCloudinaryEnabled = Boolean(
  process.env.CLOUDINARY_CLOUD_NAME &&
  process.env.CLOUDINARY_API_KEY &&
  process.env.CLOUDINARY_API_SECRET
);

// Configure multer storage for temporary file handling
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.resolve(__dirname, '../../uploads');
    fs.ensureDirSync(uploadDir);
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueId = uuidv4();
    cb(null, `${uniqueId}-${file.originalname}`);
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 500 * 1024 * 1024 }
}).single('file');

// Minimal debug logger
const debug = (msg, data = undefined) => {
  if (process.env.NODE_ENV !== 'production') {
    const timestamp = new Date().toISOString();
    if (data !== undefined) {
      console.log(`[${timestamp}] ${msg}`, data);
    } else {
      console.log(`[${timestamp}] ${msg}`);
    }
  }
};

// Controller functions
const generateQuote = (req, res) => {
  debug('generateQuote called');
  
  upload(req, res, async function(err) {
    if (err) {
      console.error('❌ MULTER ERROR:', err);
      return res.status(400).json({
        success: false,
        error: 'File upload failed',
        message: err.message
      });
    }

    debug('multer processed file');

    try {
      if (!req.file) {
        console.error('❌ NO FILE IN REQUEST');
        throw new Error('No file uploaded');
      }

      debug('file upload successful');
      debug('File received', { 
        filename: req.file.originalname,
        size: req.file.size,
        path: req.file.path,
        absolutePath: path.resolve(req.file.path)
      });

      // Calculate volume from STL file
      let volume;
      try {
        debug('starting volume calculation', {
          filename: req.file.originalname,
          size: req.file.size,
          path: req.file.path,
          absolutePath: path.resolve(req.file.path)
        });

        volume = await VolumeCalculatorService.calculateVolume(req.file.path);

        debug('volume calculation completed', { volume });
        if (!volume || volume <= 0 || isNaN(volume)) {
          throw new Error(`Invalid volume calculated: ${volume}`);
        }
      } catch (error) {
        console.error('🎮 VOLUME CALCULATION FAILED');
        console.error('=== CONTROLLER: Volume calculation FAILED ===');
        console.error('Error details:', error);
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
        
        // Clean up uploaded file on error
        if (req.file) {
          await fs.remove(req.file.path).catch(console.error);
        }
        
        return res.status(400).json({
          success: false,
          error: 'Failed to calculate volume from STL file',
          message: error.message,
          details: 'Please ensure you uploaded a valid STL file and that Python is installed on the server'
        });
      }

      debug('volume calculation complete', { volume });

      // Upload file to Cloudinary (optional in local/dev)
      let fileUrl = '';
      if (isCloudinaryEnabled) {
        try {
          debug('starting cloudinary upload');
          const cloudinaryResult = await cloudinary.uploader.upload(req.file.path, {
            resource_type: 'raw',
            folder: '3D printing',
            use_filename: true,
            unique_filename: true,
            format: 'stl'
          });
          fileUrl = cloudinaryResult.secure_url;
          debug('file uploaded to cloudinary', {
            url: cloudinaryResult.secure_url,
            publicId: cloudinaryResult.public_id
          });
        } catch (uploadError) {
          console.error('Error uploading to Cloudinary:', uploadError);
          throw new Error('Failed to upload file to cloud storage');
        }
      } else {
        debug('cloudinary disabled - skipping upload');
      }

      // Initialize Google Sheets API (optional in local/dev)
      let client = null;
      if (process.env.GOOGLE_SHEETS_ID) {
        try {
          const jsonInline = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
          const jsonBase64 = process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64;
          if (jsonInline || jsonBase64) {
            const rawJson = jsonInline || Buffer.from(jsonBase64, 'base64').toString('utf8');
            const credentials = JSON.parse(rawJson);
            const auth = new google.auth.GoogleAuth({
              credentials,
              scopes: ['https://www.googleapis.com/auth/spreadsheets']
            });
            client = await auth.getClient();
            debug('google sheets auth from JSON env created');
          } else if (process.env.GOOGLE_SERVICE_ACCOUNT_PATH) {
            const keyPath = path.resolve(__dirname, '../../', process.env.GOOGLE_SERVICE_ACCOUNT_PATH);
            if (require('fs').existsSync(keyPath)) {
              const auth = new google.auth.GoogleAuth({
                keyFile: keyPath,
                scopes: ['https://www.googleapis.com/auth/spreadsheets']
              });
              client = await auth.getClient();
              debug('google sheets auth from key file created');
            } else {
              debug('google sheets key file not found - skipping sheets update');
            }
          } else {
            debug('no google service account credentials provided - skipping sheets update');
          }
        } catch (e) {
          console.error('Failed to initialize Google Sheets auth:', e.message);
        }
      } else {
        debug('GOOGLE_SHEETS_ID not set - skipping sheets update');
      }

      // Calculate quote details
      const quoteId = `Q${Date.now()}`;
      const timestamp = new Date().toISOString();
      
      debug('quote parameters', {
        volume,
        technology: req.body.technology,
        material: req.body.material,
        quantity: req.body.quantity
      });
      
      // Convert volume from mm^3 (service output) to cm^3 for downstream calcs
      const volumeCm3 = volume / 1000;

      // Calculate weight based on material density and volume (cm^3)
      let density = 1.25; // Default density (g/cm³)
      switch(req.body.material?.toLowerCase()) {
        case 'pla':
          density = 1.24;
          break;
        case 'abs':
          density = 1.04;
          break;
        case 'petg':
          density = 1.27;
          break;
        case 'nylon':
          density = 1.14;
          break;
        case 'tpu':
          density = 1.21;
          break;
      }
      const weight = volumeCm3 * density; // grams

      debug('weight calculation', {
        volume,
        density,
        weight: weight + 'g'
      });

      // Calculate base price based on technology and volume (cm^3)
      let baseRate = 1.0;
      switch(req.body.technology?.toLowerCase()) {
        case 'fdm':
        case '3d-printing':
          baseRate = 0.002; // ₹0.002 per cm³ for FDM
          break;
        case 'sla':
          baseRate = 0.005; // ₹0.005 per cm³ for SLA
          break;
        case 'sls':
          baseRate = 0.008; // ₹0.008 per cm³ for SLS
          break;
        case 'mjf':
          baseRate = 0.010; // ₹0.010 per cm³ for MJF
          break;
      }

      // Calculate final price considering volume, quantity, and complexity
      const quantity = parseInt(req.body.quantity) || 1;
      debug('calculating price with parameters', {
        volume,
        baseRate,
        quantity,
        technology: req.body.technology
      });
      
      const volumePrice = volumeCm3 * baseRate;
      const quantityDiscount = quantity > 10 ? 0.85 : (quantity > 5 ? 0.9 : 1.0);
      const totalPrice = volumePrice * quantity * quantityDiscount;
      const price = Math.max(Math.round(totalPrice), 100); // Minimum price of ₹100

      debug('price calculation', {
        volumePrice,
        quantityDiscount,
        totalPrice,
        finalPrice: price
      });

      // Estimate delivery based on technology and quantity
      let baseDeliveryDays = 5;
      if (quantity > 20) baseDeliveryDays += 5;
      else if (quantity > 10) baseDeliveryDays += 3;
      
      if (req.body.technology?.toLowerCase() === 'sls' || req.body.technology?.toLowerCase() === 'mjf') {
        baseDeliveryDays += 2;
      }
      
      const estimatedDelivery = `${baseDeliveryDays}-${baseDeliveryDays + 2} business days`;

      // Add data to Google Sheets (only if configured)
      if (client) {
        const sheets = google.sheets({ version: 'v4', auth: client });
        try {
          debug('adding data to google sheets');
          await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEETS_ID,
            range: 'Sheet1!A:M',
            valueInputOption: 'RAW',
            insertDataOption: 'INSERT_ROWS',
            resource: {
              values: [[
                timestamp,
                quoteId,
                req.body.technology,
                req.body.printingTechnology || 'N/A',
                req.body.material,
                req.body.quantity,
                req.body.email,
                req.body.mobile,
                fileUrl,  // Cloudinary URL
                price,
                volume,
                weight,
                estimatedDelivery
              ]]
            }
          });
          debug('google sheets update complete');
        } catch (sheetError) {
          console.error('Sheet operation failed:', sheetError);
          throw new Error('Failed to update Google Sheet: ' + sheetError.message);
        }
      }

      // Clean up uploaded file
      await fs.remove(req.file.path);
      debug('temporary file cleaned up');

      // Send response
      const response = {
        success: true,
        quote: {
          quoteId,
          price,
          volume_cm3: Math.round(volumeCm3 * 100) / 100,
          weight: Math.round(weight),
          estimatedDelivery,
          technology: req.body.technology,
          material: req.body.material,
          quantity: parseInt(req.body.quantity),
          fileName: req.file.originalname,
          fileUrl: fileUrl  // Cloudinary URL
        }
      };

      debug('quote generation successful');

      res.json(response);

    } catch (error) {
      console.error('Quote generation error:', error.message);

      // Clean up uploaded file on error
      if (req.file) {
        await fs.remove(req.file.path).catch(console.error);
      }

      res.status(500).json({
        success: false,
        error: 'Failed to generate quote',
        message: error.message
      });
    }
  });
};

const healthCheck = (req, res) => {
  console.log('❤️ HEALTH CHECK CALLED');
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString() 
  });
};

module.exports = {
  generateQuote,
  healthCheck
};