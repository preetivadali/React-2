import React, { useState } from 'react';
import './ColorPicker.css';

const ColorPicker = () => {
  const [color, setColor] = useState('#fff'); 

  return (
    <div className="color-picker-container">
      <h1>Pick a Color</h1>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <div className="color-display">
        The selected color is: {color}
      </div>
    </div>
  );
};

export default ColorPicker;
