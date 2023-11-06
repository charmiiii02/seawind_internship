import React from 'react';
import './PopularModelsHeader.css';

function PopularModelsHeader() {
  return (
    <div className="popular-models-header">
      <h2>Popular Models</h2>
      <div className="underline">
        <span>--------</span><span>&lt;&gt;</span><span>--------</span>
      </div>
    </div>
  );
}

export default PopularModelsHeader;