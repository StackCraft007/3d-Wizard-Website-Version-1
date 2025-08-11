import requests

def test_volume_endpoint():
    file_path = '../backend/Base_Part.stl'
    url = 'http://localhost:5001/calculate-volume'
    
    print(f"Testing with file: {file_path}")
    print(f"Sending request to: {url}")
    
    try:
        print("Opening file...")
        with open(file_path, 'rb') as f:
            files = {'file': ('Base_Part.stl', f, 'application/octet-stream')}
            print("Sending POST request...")
            response = requests.post(url, files=files)
            print(f"Response status code: {response.status_code}")
            
        if response.status_code == 200:
            print(f"Success! Volume: {response.json()['volume']} mm³")
            return True
        else:
            print(f"Error: {response.status_code}")
            print(response.text)
            return False
    except Exception as e:
        print(f"Error: {str(e)}")
        return False

if __name__ == '__main__':
    test_volume_endpoint()
