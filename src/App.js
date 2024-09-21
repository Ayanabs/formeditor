import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('Welcome to our form'); // Default title text
  const [descriptionText, setDescriptionText] = useState('This is the description of the form'); // Default description text
  const [showTextbox, setShowTextbox] = useState(false);
  const [showButton, setShowButton] = useState(true); // Control button visibility
  const [imagePreview, setImagePreview] = useState(null); // Preview uploaded image
  const [alignment, setAlignment] = useState('left'); // State to manage alignment

  // Update the input text when typing (Title)
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Update the description text when typing
  const handleDescriptionChange = (e) => {
    setDescriptionText(e.target.value);
  };

  // Handle Home Screen button click
  const handleHomeScreenClick = () => {
    setShowTextbox(true);  // Show the textboxes
    setShowButton(false);  // Hide the button
  };

  // Handle file upload for showing preview
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl); // Set image for preview
    }
  };

  // Remove the uploaded image
  const handleRemoveImage = () => {
    setImagePreview(null); // Reset the image preview
  };

  // Set alignment to left image, right text
  const handleLeftImageRightText = () => {
    setAlignment('left');
  };

  // Set alignment to right image, left text
  const handleRightImageLeftText = () => {
    setAlignment('right');
  };

  return (
    <div className="App">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Conditionally show the Home Screen button */}
        {showButton && (
          <button className="home-button" onClick={handleHomeScreenClick}>
            Home Screen
          </button>
        )}

        {/* Conditionally show the input textboxes and upload image option */}
        {showTextbox && (
          <>
            <div className="textbox-container">
              <h2>Title</h2>
              <input
                type="text"
                placeholder="Type title..."
                value={inputText}
                onChange={handleInputChange}
                style={{ fontSize: '16px', padding: '10px', width: '80%', borderRadius: '5px' }} // Shorten width to 80%
              />
            </div>
            
            <div className="textbox-container">
              <h2>Description</h2>
              <input
                type="text"
                placeholder=""
                value={descriptionText}
                onChange={handleDescriptionChange}
                style={{ fontSize: '16px', padding: '10px', width: '80%', borderRadius: '5px' }} // Shorten width to 80%
              />
            </div>

            {/* Custom upload button */}
            <div className="upload-container">
              
              <label className="custom-upload-button">
                Upload
                <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
              </label>

              {/* Image Preview */}
              {imagePreview && (
                <div className="image-preview-container">
                  <h3>Preview:</h3>
                  <img 
                    src={imagePreview} 
                    alt="Image preview" 
                    className="image-preview" 
                  />
                  <button 
                    className="remove-image-button" 
                    onClick={handleRemoveImage} 
                    style={{ marginTop: '10px', padding: '5px 10px', fontSize: '16px', backgroundColor: 'white', color: 'black', borderRadius: '5px', cursor: 'pointer' }}
                  >
                    Remove Image
                  </button>
                </div>
              )}
            </div>

            {/* Alignment buttons */}
            <div className="alignment-buttons">
              <button className="align-button" onClick={handleLeftImageRightText}>
                Left Align
              </button>
              <button className="align-button" onClick={handleRightImageLeftText}>
                Right Align
              </button>
            </div>
          </>
        )}
      </div>

      {/* Display Area with a box around it */}
      <div className="content">
        <div className="display-box">
          <div className={`layout ${alignment}`}>
            <div className="image-section">
              {imagePreview && (
                <img src={imagePreview} alt="Preview" style={{ width: '700px', height: '450px', padding: '10px' }} />
              )}
            </div>
            <div className="text-section">
              <div className="text-content" style={{ fontSize: '50px', fontWeight: 'bold', marginTop: '20px' }}>
                {inputText}
              </div>
              <div className="text-content" style={{ fontSize: '35px', marginTop: '20px' }}>
                {descriptionText}
              </div>
              {/* Start button */}
              <button className="start-button" style={{ marginTop: '20px', padding: '10px 20px', fontSize: '18px' }}>
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;