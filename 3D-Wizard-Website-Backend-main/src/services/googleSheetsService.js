const { sheets } = require('../config/google');

class GoogleSheetsService {
  static async addQuoteRecord(quoteData) {
    try {
      const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
      
      if (!spreadsheetId) {
        throw new Error('Google Sheets ID not configured');
      }

      // Prepare the row data
      const values = [[
        new Date().toISOString(), // Timestamp
        quoteData.email,
        quoteData.mobile,
        quoteData.technology,
        `${quoteData.printingTechnology || ''} - ${quoteData.material}`,
        quoteData.quantity,
        quoteData.volume_cm3 || 'N/A',
        quoteData.price,
        quoteData.fileLink,
        'Pending' // Status
      ]];

      const resource = {
        values,
      };

      const result = await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'A:J', // Columns A through J
        valueInputOption: 'USER_ENTERED',
        resource,
      });

      console.log('✅ Record added to Google Sheets:', result.data.updates);
      return result.data;
    } catch (error) {
      console.error('❌ Error adding record to Google Sheets:', error);
      throw new Error('Failed to add record to Google Sheets');
    }
  }

  static async initializeSheet() {
    try {
      const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
      
      if (!spreadsheetId) {
        throw new Error('Google Sheets ID not configured');
      }

      // Check if headers exist
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: 'A1:J1',
      });

      // If no headers, add them
      if (!response.data.values || response.data.values.length === 0) {
        const headers = [[
          'Timestamp',
          'Email',
          'Mobile',
          'Technology',
          'Material',
          'Quantity',
          'Volume (cm³)',
          'Price (₹)',
          'File Link',
          'Status'
        ]];

        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: 'A1:J1',
          valueInputOption: 'USER_ENTERED',
          resource: { values: headers },
        });

        console.log('✅ Headers added to Google Sheet');
      }

      return true;
    } catch (error) {
      console.error('❌ Error initializing Google Sheet:', error);
      throw new Error('Failed to initialize Google Sheet');
    }
  }

  static async updateQuoteStatus(email, timestamp, status) {
    try {
      const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
      
      // This would require finding the specific row and updating it
      // For now, we'll just add a note that this feature can be implemented
      console.log(`Status update requested for ${email} at ${timestamp}: ${status}`);
      
      return true;
    } catch (error) {
      console.error('Error updating quote status:', error);
      throw new Error('Failed to update quote status');
    }
  }
}

module.exports = GoogleSheetsService;