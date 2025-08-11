const path = require('path');
const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

class VolumeCalculatorService {
  static async calculateVolume(filePath) {
    try {
      // Validate file exists
      if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
      }

      // Validate file extension
      const fileExtension = path.extname(filePath).toLowerCase();
      if (fileExtension !== '.stl') {
        throw new Error('Only STL files are supported');
      }

      // Get API URL from environment
      const apiUrl = process.env.STL_VOLUME_API_URL;
      if (!apiUrl) {
        throw new Error('STL_VOLUME_API_URL environment variable is not set');
      }

      // Create form data with file
      const formData = new FormData();
      formData.append('file', fs.createReadStream(filePath));

      // Make API request
      const response = await axios.post(apiUrl, formData, {
        headers: {
          ...formData.getHeaders(),
          'Accept': 'application/json'
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity
      });

      // Validate response
      if (!response.data || typeof response.data.volume !== 'number') {
        throw new Error('Invalid response from volume calculation service');
      }

      const volume = response.data.volume;

      // Validate volume
      if (volume <= 0) {
        throw new Error(`Invalid volume calculated: ${volume}`);
      }

      console.log('✅ Volume calculated successfully:', volume);
      return volume;

    } catch (error) {
      console.error('❌ VolumeCalculatorService error:', error);
      throw error;
    }
  }
}

// Export the class
module.exports = VolumeCalculatorService;
