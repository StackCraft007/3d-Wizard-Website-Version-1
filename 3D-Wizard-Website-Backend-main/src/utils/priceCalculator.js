// Add this at the top
const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

// Helper to get STL volume from backend2 API
async function getStlVolumeFromApi(stlFilePath) {
  const apiUrl = process.env.STL_VOLUME_API_URL || 'https://backend2-stl-volume.onrender.com/calculate-volume';
  const formData = new FormData();
  formData.append('file', fs.createReadStream(stlFilePath));
  try {
    const response = await axios.post(apiUrl, formData, {
      headers: formData.getHeaders(),
    });
    return response.data.volume;
  } catch (error) {
    throw new Error('Failed to get volume from API: ' + error.message);
  }
}

// Usage: const volume = await getStlVolumeFromApi(stlFilePath);
// Then pass volume to PriceCalculator.calculatePrice(...)
class PriceCalculator {
  static getMaterialDensity(material) {
    // Density in g/cm³
    switch (material) {
      case 'PLA':
        return 1.24;
      case 'ABS':
        return 1.04;
      case 'PETG':
        return 1.27;
      case 'TPU':
        return 1.21;
      case 'Nylon':
        return 1.14;
      case 'PEEK':
        return 1.32;
      case 'Resin':
        return 1.12;
      default:
        return 1.25; // Default density
    }
  }

  static calculatePrice(technology, printingTechnology, material, volume, quantity = 1) {
    // Convert volume from mm³ to cm³
    const volumeInCm3 = volume / 1000;

    // Calculate weight in grams
    const density = this.getMaterialDensity(material);
    const weightInGrams = volumeInCm3 * density;

    // Base price ₹1 per gram, with technology multipliers
    let pricePerGram = 1;
    
    // Apply technology multipliers
    switch (technology) {
      case '3d-printing':
        switch (printingTechnology) {
          case 'FDM':
            pricePerGram = 1.0;
            break;
          case 'SLA':
            pricePerGram = 1.5;
            break;
          case 'SLS':
            pricePerGram = 2.0;
            break;
          case 'MJF':
            pricePerGram = 1.8;
            break;
          default:
            pricePerGram = 1.0;
        }
        break;
      case '3d-scanning':
        // For scanning, use a different pricing model
        return {
          price: 500 + (volumeInCm3 * 0.5), // Base price + volume-based addition
          weight: weightInGrams,
          pricePerGram: 'N/A',
          volume: volumeInCm3,
          density: density,
          setupCost: 500
        };
      case 'vacuum-casting':
        pricePerGram = 2.5;
        break;
      default:
        pricePerGram = 1.0;
    }

    // Apply material multipliers
    switch (material) {
      case 'PLA':
        pricePerGram *= 1.0;
        break;
      case 'ABS':
        pricePerGram *= 1.2;
        break;
      case 'PETG':
        pricePerGram *= 1.3;
        break;
      case 'TPU':
        pricePerGram *= 1.5;
        break;
      case 'Nylon':
        pricePerGram *= 1.8;
        break;
      case 'PEEK':
        pricePerGram *= 4.0;
        break;
      case 'Resin':
        pricePerGram *= 2.0;
        break;
    }

    // Calculate total price
    let totalPrice = weightInGrams * pricePerGram;

    // Apply quantity discount
    if (quantity > 1) {
      const discount = Math.min(0.4, (quantity - 1) * 0.05); // Max 40% discount
      totalPrice *= (1 - discount);
    }

    // Add setup cost
    const setupCost = 200; // ₹200 setup cost
    totalPrice += setupCost;

    // Round to 2 decimal places and return all calculation details
    return {
      price: Math.round(totalPrice * quantity),
      weight: Math.round(weightInGrams * 100) / 100,
      pricePerGram: Math.round(pricePerGram * 100) / 100,
      volume: Math.round(volumeInCm3 * 100) / 100,
      density: density,
      setupCost: setupCost
    };
  }
}

module.exports = PriceCalculator;
