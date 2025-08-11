const { google } = require('googleapis');
const path = require('path');

// Load service account credentials
const CREDENTIALS_PATH = path.join(__dirname, '../../', process.env.GOOGLE_SERVICE_ACCOUNT_PATH);

let auth;

try {
  auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: [
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/spreadsheets'
    ]
  });
} catch (error) {
  console.error('❌ Failed to load Google credentials:', error.message);
  console.log('📝 Make sure to place your service-account-key.json in the credentials folder');
}

const drive = google.drive({ version: 'v3', auth });
const sheets = google.sheets({ version: 'v4', auth });

module.exports = {
  auth,
  drive,
  sheets
};