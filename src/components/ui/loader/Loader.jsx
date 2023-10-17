import React from 'react';
import './loader.scss';
function Loader() {
  return (
    <div className="loading-container">
      <div className="loading"></div>
      <h2 id="loading-text">loading</h2>
    </div>
  );
}

export default Loader;
