from app import calculate_stl_volume
import os

def test_stl_volume():
    # Path to the test STL file
    stl_file = os.path.join('..', 'backend', 'Base_Part.stl')
    
    # Calculate volume
    try:
        volume = calculate_stl_volume(stl_file)
        print(f"\nTest Results:")
        print(f"{'='*50}")
        print(f"File: {os.path.basename(stl_file)}")
        print(f"Calculated Volume: {volume:.2f} mm³")
        print(f"{'='*50}")
        
        # Basic validation
        if volume > 0:
            print("✅ Test passed: Volume is positive")
        else:
            print("❌ Test failed: Volume should be positive")
            
    except Exception as e:
        print(f"❌ Test failed with error: {str(e)}")

if __name__ == '__main__':
    test_stl_volume()
