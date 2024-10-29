import React from 'react';
import './../../css/LoadingOverlay.css'; // Import styles for the overlay

const LoadingOverlay = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingOverlay;
