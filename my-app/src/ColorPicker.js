import React, { useState } from 'react';
import './ColorPicker.css';

const ColorPicker = ({ colors }) => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setBackgroundColor(color);
    setShowColors(false);
  };

  return (
    <div className="color-picker" style={{ backgroundColor }}>
      <button onClick={() => setShowColors(!showColors)}>Pick a color</button>
      {showColors && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-option"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && <p>Selected color: {selectedColor}</p>}
    </div>
  );
};

export default ColorPicker;
