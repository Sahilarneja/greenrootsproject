import React, { useState } from 'react';
import '../styles/TotalSavings.css';
import solarImage from '../assets/main/solar.png'; // Correctly import the image

const TotalSavings = () => {
  const [availableArea, setAvailableArea] = useState('');
  const [mountType, setMountType] = useState('rooftop');
  const [gridCost, setGridCost] = useState('');
  const [capacity, setCapacity] = useState(null);
  const [savings, setSavings] = useState(null);

  const handleCalculate = () => {
    const calculatedCapacity = availableArea / 8;
    setCapacity(calculatedCapacity);

    const factor = mountType === 'rooftop' ? 1300 : 1500;
    const calculatedSavings = calculatedCapacity * factor * gridCost;
    setSavings(calculatedSavings);
  };

  return (
    <div className="main-container">
      <div className="image-container">
        <img src={solarImage} alt="Solar Panels" className="solar-image" />
      </div>
      <div className="calculator-container">
        <div className="total-savings-container">
          <h2>Calculate Your Saving</h2>
          <br/>
          <div className="form-group">
            <label htmlFor="available-area">Available Area (sq.m):</label>
            <input
              type="number"
              id="available-area"
              value={availableArea}
              onChange={(e) => setAvailableArea(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mount-type">Mount Type:</label>
            <select
              id="mount-type"
              value={mountType}
              onChange={(e) => setMountType(e.target.value)}
            >
              <option value="rooftop">Rooftop</option>
              <option value="ground-mount">Ground Mount</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="grid-cost">Grid Electricity Cost (INR/kWh):</label>
            <input
              type="number"
              id="grid-cost"
              value={gridCost}
              onChange={(e) => setGridCost(e.target.value)}
            />
          </div>
          <button onClick={handleCalculate}>Calculate</button>
          {capacity !== null && (
            <div className="results">
              <p>Capacity of Solar Plant: {capacity.toFixed(2)} kW</p>
              <p>Savings in First Year: {savings.toFixed(2)} INR/Year</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TotalSavings;
