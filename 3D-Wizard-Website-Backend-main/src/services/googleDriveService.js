const { drive } = require('../config/google');
const fs = require('fs');
const path = require('path');

class GoogleDriveService {
  static async uploadFile(filePath, originalName, email) {
    try {
      const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
      
      if (!folderId) {
        throw new Error('Google Drive folder ID not configured');
      }

      // Create a subfolder for this user if it doesn't exist
      const userFolderName = `${email.split('@')[0]}_${Date.now()}`;
      
      const folderMetadata = {
        name: userFolderName,
        parents: [folderId],
        mimeType: 'application/vnd.google-apps.folder',
      };

      const userFolder = await drive.files.create({
        resource: folderMetadata,
        fields: 'id',
      });

      const userFolderId = userFolder.data.id;

      // Upload the file to the user's folder
      const fileMetadata = {
        name: originalName,
        parents: [userFolderId],
      };

      const media = {
        mimeType: 'application/octet-stream',
        body: fs.createReadStream(filePath),
      };

      const file = await drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: 'id,name,webViewLink',
      });

      // Set file permissions to be viewable by anyone with the link
      await drive.permissions.create({
        fileId: file.data.id,
        resource: {
          role: 'reader',
          type: 'anyone',
        },
      });

      return {
        fileId: file.data.id,
        fileName: file.data.name,
        fileLink: file.data.webViewLink,
        folderId: userFolderId,
      };
    } catch (error) {
      console.error('Error uploading to Google Drive:', error);
      throw new Error('Failed to upload file to Google Drive');
    }
  }

  static async deleteFile(fileId) {
    try {
      await drive.files.delete({
        fileId: fileId,
      });
      return true;
    } catch (error) {
      console.error('Error deleting file from Google Drive:', error);
      return false;
    }
  }

  static async createQuoteFolder(email) {
    try {
      const parentFolderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
      const folderName = `Quote_${email.split('@')[0]}_${Date.now()}`;

      const folderMetadata = {
        name: folderName,
        parents: [parentFolderId],
        mimeType: 'application/vnd.google-apps.folder',
      };

      const folder = await drive.files.create({
        resource: folderMetadata,
        fields: 'id,name,webViewLink',
      });

      return {
        id: folder.data.id,
        name: folder.data.name,
        link: folder.data.webViewLink,
      };
    } catch (error) {
      console.error('Error creating quote folder:', error);
      throw new Error('Failed to create quote folder');
    }
  }
}

module.exports = GoogleDriveService;    