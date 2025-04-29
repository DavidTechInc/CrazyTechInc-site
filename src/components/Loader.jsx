
import React from 'react';
import './Loader.css';

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading in progress...</p>
    </div>
  );
}

export default Loader;