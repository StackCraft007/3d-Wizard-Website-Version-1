import os
import tempfile
from flask import Flask, request, jsonify
from flask_cors import CORS
from stl import mesh
import numpy as np

app = Flask(__name__)
CORS(app)

def calculate_stl_volume(file_path):
    """
    Calculate the volume of an STL file
    Args:
        file_path (str): Path to the STL file
    Returns:
        float: Volume in cubic millimeters
    """
    try:
        # Load the STL file
        your_mesh = mesh.Mesh.from_file(file_path)
        
        # Get all the triangles from the mesh
        vectors = your_mesh.vectors
        
        # Calculate volume using vectorized operations
        # Volume calculation algorithm:
        # 1. For each triangle, calculate (v1 × v2) · v3 / 6
        # 2. Sum up all these volumes
        # The final result is the total volume
        
        v0 = vectors[:, 0, :]  # First vertex of each triangle
        v1 = vectors[:, 1, :]  # Second vertex
        v2 = vectors[:, 2, :]  # Third vertex
        
        # Calculate volume for all triangles at once using vectorization
        vol = np.sum(np.cross(v1 - v0, v2 - v0) * v0) / 6.0
        
        # Volume should be positive; cast to plain Python float for JSON safety
        volume = float(abs(vol))
        
        return volume
    except Exception as e:
        raise Exception(f"Error calculating volume: {str(e)}")

@app.route('/calculate-volume', methods=['POST'])
def calculate_volume():
    print("Received request:", request.method)
    print("Files in request:", request.files)
    print("Form data:", request.form)
    print("Headers:", request.headers)
    
    if 'file' not in request.files:
        return jsonify({'error': 'No file part', 'files': list(request.files.keys())}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    if not file.filename.lower().endswith('.stl'):
        return jsonify({'error': 'Invalid file type. Only STL files are allowed.'}), 400
    
    try:
        # Save file to temporary location
        temp_dir = tempfile.gettempdir()
        temp_path = os.path.join(temp_dir, file.filename)
        file.save(temp_path)
        
        # Calculate volume
        volume = calculate_stl_volume(temp_path)
        
        # Clean up
        os.remove(temp_path)
        
        if volume <= 0:
            return jsonify({'error': 'Invalid volume calculated'}), 400
            
        print(f"Successfully calculated volume: {volume} mm^3")
        return jsonify({
            'volume': volume,
            'units': 'mm^3'
        })
        
    except Exception as e:
        print(f"Error processing file: {str(e)}")
        return jsonify({'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'ok'}), 200

if __name__ == '__main__':
    app.debug = True
    print("Starting Flask server...")
    app.run(host='0.0.0.0', port=5001, debug=True)
