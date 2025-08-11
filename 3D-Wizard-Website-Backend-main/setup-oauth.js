const { google } = require('googleapis');
const fs = require('fs-extra');
const path = require('path');
const http = require('http');
const url = require('url');
const { exec } = require('child_process');
const destroyer = require('server-destroy');

// OAuth 2.0 credentials path
const CREDENTIALS_PATH = path.join(__dirname, 'oauth_credentials.json');
const TOKEN_PATH = path.join(__dirname, 'token.json');
const SCOPES = [
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/spreadsheets'
];

// Function to open URL in default browser cross-platform
function openBrowser(url) {
  let command;
  switch (process.platform) {
    case 'darwin':
      command = `open "${url}"`;
      break;
    case 'win32':
      command = `start "${url}"`;
      break;
    default:
      command = `xdg-open "${url}"`;
  }
  exec(command, (err) => {
    if (err) {
      console.log('Failed to open browser automatically.');
      console.log('Please open this URL in your browser:', url);
    }
  });
}

async function authenticate() {
  try {
    console.log('Reading credentials file...');
    const credentials = JSON.parse(await fs.readFile(CREDENTIALS_PATH));
    const { client_secret, client_id, redirect_uris } = credentials.installed || credentials.web;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

    // Check if we have previously stored a token
    try {
      const token = JSON.parse(await fs.readFile(TOKEN_PATH));
      oAuth2Client.setCredentials(token);
      console.log('Existing token loaded successfully');
      return oAuth2Client;
    } catch (err) {
      return getNewToken(oAuth2Client);
    }
  } catch (err) {
    console.error('Error loading client secret file:', err);
    throw err;
  }
}

async function getNewToken(oAuth2Client) {
  return new Promise((resolve, reject) => {
    // Generate the url that will be used for authorization
    const authorizeUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    });

    console.log('Authorizing... Please open your browser if it doesn\'t open automatically.');
    
    const server = http.createServer(async (req, res) => {
      try {
        const qs = new url.URL(req.url, 'http://localhost:3000').searchParams;
        const code = qs.get('code');
        if (code) {
          res.end('Authentication successful! You can close this window.');
          server.destroy();
          
          try {
            const { tokens } = await oAuth2Client.getToken(code);
            oAuth2Client.setCredentials(tokens);
            
            // Store the token to disk for later program executions
            await fs.writeFile(TOKEN_PATH, JSON.stringify(tokens));
            console.log('Token stored successfully');
            resolve(oAuth2Client);
          } catch (err) {
            console.error('Error getting/storing token:', err);
            reject(err);
          }
        }
      } catch (e) {
        console.error('Error processing authentication:', e);
        res.end('Authentication failed! Please check the console.');
        server.destroy();
        reject(e);
      }
    });

    server.listen(3000, () => {
      console.log('Listening on http://localhost:3000');
      openBrowser(authorizeUrl);
    });

    destroyer(server);
  });
}

// Run the OAuth2 authentication flow
console.log('Starting OAuth setup...');
authenticate().then(() => {
  console.log('Authentication completed successfully!');
  process.exit(0);
}).catch(err => {
  console.error('Authentication failed:', err);
  process.exit(1);
});

