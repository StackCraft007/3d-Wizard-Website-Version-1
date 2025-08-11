require('dotenv').config();
const { google } = require('googleapis');
const path = require('path');

async function testConfig() {
  console.log('Testing configuration...');
  
  // Test environment variables
  console.log('\nEnvironment Variables:');
  console.log('PORT:', process.env.PORT);
  console.log('NODE_ENV:', process.env.NODE_ENV);
  console.log('GOOGLE_SHEETS_ID:', process.env.GOOGLE_SHEETS_ID);
  console.log('GOOGLE_DRIVE_FOLDER_ID:', process.env.GOOGLE_DRIVE_FOLDER_ID);
  
  // Test service account credentials
  try {
    const credentialsPath = path.resolve(process.env.GOOGLE_SERVICE_ACCOUNT_PATH);
    console.log('\nService Account Path:', credentialsPath);
    
    const auth = new google.auth.GoogleAuth({
      keyFile: credentialsPath,
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });
    
    const client = await auth.getClient();
    console.log('✅ Service account credentials loaded successfully');
    
    // Test Sheets API
    const sheets = google.sheets({ version: 'v4', auth: client });
    const response = await sheets.spreadsheets.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID
    });
    
    console.log('✅ Google Sheets API connection successful');
    console.log('Sheet Title:', response.data.properties.title);
    
  } catch (error) {
    console.error('❌ Configuration test failed:', error.message);
  }
}

testConfig();