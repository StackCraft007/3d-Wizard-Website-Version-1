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

      // Retry with backoff for transient 5xx/timeout issues
      const maxAttempts = 3;
      let lastError;
      for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
          const response = await axios.post(apiUrl, formData, {
            headers: {
              ...formData.getHeaders(),
              'Accept': 'application/json'
            },
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
            timeout: 30000
          });

          const volume = response.data.volume;
          if (!volume || volume <= 0) {
            throw new Error(`Invalid volume calculated: ${volume}`);
          }
          console.log('Volume calculated successfully:', volume);
          return volume;
        } catch (error) {
          lastError = error;
          const status = error.response?.status;
          const isRetryable = !status || status >= 500 || [
            'ECONNRESET', 'ETIMEDOUT', 'ENOTFOUND'
          ].includes(error.code);
          if (attempt < maxAttempts && isRetryable) {
            const waitMs = 500 * attempt;
            console.warn(`Volume API attempt ${attempt} failed (${status || error.code}). Retrying in ${waitMs}ms...`);
            await new Promise(r => setTimeout(r, waitMs));
            continue;
          }
          console.error('API request error:', error.message, status ? `status=${status}` : '');
          throw new Error(`Failed to calculate volume: ${error.message}`);
        }
      }
      throw lastError || new Error('Unknown error calling volume API');
    } catch (error) {
      console.error('VolumeCalculatorService error:', error);
      throw error;
    }
  }
}

module.exports = VolumeCalculatorService;
