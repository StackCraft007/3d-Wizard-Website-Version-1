
// Calls backend2 Flask API to calculate STL volume
const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

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

module.exports = { getStlVolumeFromApi };
