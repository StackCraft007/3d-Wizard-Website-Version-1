const path = require('path');
const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

/**
 * Service for calculating volume of STL files
 */
class VolumeCalculatorService {
  /**
   * Calculate volume of an STL file
   * @param {string} filePath - Path to the STL file
   * @returns {Promise<number>} - Volume in cubic millimeters
   */
  static async calculateVolume(filePath) {
    try {
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
      console.log('API URL:', apiUrl);
      if (!apiUrl) {
        throw new Error('STL_VOLUME_API_URL environment variable is not set');
      }

      const formData = new FormData();
      formData.append('file', fs.createReadStream(filePath));
      console.log('FormData headers:', formData.getHeaders());

      try {
        const response = await axios.post(apiUrl, formData, {
          headers: formData.getHeaders(),
        });

        const volume = response.data.volume;

        if (!volume || volume <= 0) {
          throw new Error(`Invalid volume calculated: ${volume}`);
        }

        console.log('Volume calculated successfully:', volume);
        return volume;
      } catch (error) {
        console.error('API request error:', error.message);
        throw new Error(`Failed to calculate volume: ${error.message}`);
      }
    } catch (error) {
      console.error('VolumeCalculatorService error:', error);
      throw error;
    }
  }
}

module.exports = VolumeCalculatorService;
