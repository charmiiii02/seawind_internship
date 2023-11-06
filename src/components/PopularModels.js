

import React, { useState } from "react";
import "./PopularModels.css";

// Assuming you have an array of model images and details
const initialModels = [
  {
    image: "model1.jpg",
    name: "Model One",
    type: "Top Model",
    height: "160cm",
    weight: "50kg",
    hair: "Brown",
    dress: "2.4",
    bust: "75",
    waist: "58",
    hips: "86",
    age: "25",
    eyes: "Blue",
  },
  {
    image: "model1.jpg",
    name: "Model One",
    type: "Top Model",
    height: "160cm",
    weight: "50kg",
    hair: "Brown",
    dress: "2.4",
    bust: "75",
    waist: "58",
    hips: "86",
    age: "25",
    eyes: "Blue",
  },
  {
    image: "model1.jpg",
    name: "Model One",
    type: "Top Model",
    height: "160cm",
    weight: "50kg",
    hair: "Brown",
    dress: "2.4",
    bust: "75",
    waist: "58",
    hips: "86",
    age: "25",
    eyes: "Blue",
  },
  {
    image: "model1.jpg",
    name: "Model One",
    type: "Top Model",
    height: "160cm",
    weight: "50kg",
    hair: "Brown",
    dress: "2.4",
    bust: "75",
    waist: "58",
    hips: "86",
    age: "25",
    eyes: "Blue",
  },
  {
    image: "model1.jpg",
    name: "Model One",
    type: "Top Model",
    height: "160cm",
    weight: "50kg",
    hair: "Brown",
    dress: "2.4",
    bust: "75",
    waist: "58",
    hips: "86",
    age: "25",
    eyes: "Blue",
  },
  {
    image: "model1.jpg",
    name: "Model One",
    type: "Top Model",
    height: "160cm",
    weight: "50kg",
    hair: "Brown",
    dress: "2.4",
    bust: "75",
    waist: "58",
    hips: "86",
    age: "25",
    eyes: "Blue",
  },
  {
    image: "model1.jpg",
    name: "Model One",
    type: "Top Model",
    height: "160cm",
    weight: "50kg",
    hair: "Brown",
    dress: "2.4",
    bust: "75",
    waist: "58",
    hips: "86",
    age: "25",
    eyes: "Blue",
  },
  {
    image: "model1.jpg",
    name: "Model One",
    type: "Top Model",
    height: "160cm",
    weight: "50kg",
    hair: "Brown",
    dress: "2.4",
    bust: "75",
    waist: "58",
    hips: "86",
    age: "25",
    eyes: "Blue",
  },
  {
    image: "model1.jpg",
    name: "Model One",
    type: "Top Model",
    height: "160cm",
    weight: "50kg",
    hair: "Brown",
    dress: "2.4",
    bust: "75",
    waist: "58",
    hips: "86",
    age: "25",
    eyes: "Blue",
  },
  {
    image: "model1.jpg",
    name: "Model One",
    type: "Top Model",
    height: "160cm",
    weight: "50kg",
    hair: "Brown",
    dress: "2.4",
    bust: "75",
    waist: "58",
    hips: "86",
    age: "25",
    eyes: "Blue",
  },
  {
    image: "model1.jpg",
    name: "Model One",
    type: "Top Model",
    height: "160cm",
    weight: "50kg",
    hair: "Brown",
    dress: "2.4",
    bust: "75",
    waist: "58",
    hips: "86",
    age: "25",
    eyes: "Blue",
  },
  {
    image: "model1.jpg",
    name: "Model One",
    type: "Top Model",
    height: "160cm",
    weight: "50kg",
    hair: "Brown",
    dress: "2.4",
    bust: "75",
    waist: "58",
    hips: "86",
    age: "25",
    eyes: "Blue",
  },
  {
    image: "model1.jpg",
    name: "Model One",
    type: "Top Model",
    height: "160cm",
    weight: "50kg",
    hair: "Brown",
    dress: "2.4",
    bust: "75",
    waist: "58",
    hips: "86",
    age: "25",
    eyes: "Blue",
  },
  {
    image: "model1.jpg",
    name: "Model One",
    type: "Top Model",
    height: "160cm",
    weight: "50kg",
    hair: "Brown",
    dress: "2.4",
    bust: "75",
    waist: "58",
    hips: "86",
    age: "25",
    eyes: "Blue",
  },
  {
    image: "model1.jpg",
    name: "Model One",
    type: "Top Model",
    height: "160cm",
    weight: "50kg",
    hair: "Brown",
    dress: "2.4",
    bust: "75",
    waist: "58",
    hips: "86",
    age: "25",
    eyes: "Blue",
  },
  {
    image: "model1.jpg",
    name: "Model One",
    type: "Top Model",
    height: "160cm",
    weight: "50kg",
    hair: "Brown",
    dress: "2.4",
    bust: "75",
    waist: "58",
    hips: "86",
    age: "25",
    eyes: "Blue",
  },
  {
    image: "model1.jpg",
    name: "Model One",
    type: "Top Model",
    height: "160cm",
    weight: "50kg",
    hair: "Brown",
    dress: "2.4",
    bust: "75",
    waist: "58",
    hips: "86",
    age: "25",
    eyes: "Blue",
  },
  {
    image: "model1.jpg",
    name: "Model One",
    type: "Top Model",
    height: "160cm",
    weight: "50kg",
    hair: "Brown",
    dress: "2.4",
    bust: "75",
    waist: "58",
    hips: "86",
    age: "25",
    eyes: "Blue",
  },
  {
    image: "model1.jpg",
    name: "Model One",
    type: "Top Model",
    height: "160cm",
    weight: "50kg",
    hair: "Brown",
    dress: "2.4",
    bust: "75",
    waist: "58",
    hips: "86",
    age: "25",
    eyes: "Blue",
  },
  {
    image: "model1.jpg",
    name: "Model One",
    type: "Top Model",
    height: "160cm",
    weight: "50kg",
    hair: "Brown",
    dress: "2.4",
    bust: "75",
    waist: "58",
    hips: "86",
    age: "25",
    eyes: "Blue",
  },
  // ... add more model objects
];

function PopularModels() {
  const [models, setModels] = useState(initialModels.slice(0, 15)); // Initially show 3 rows of 5 models each
  const [visibleRows, setVisibleRows] = useState(3);

  const loadMoreModels = () => {
    const newVisibleRows = visibleRows + 1; // Each time we load more, we show 1 more row
    setVisibleRows(newVisibleRows);
    setModels(initialModels.slice(0, 5 * newVisibleRows));
  };

  return (
    <div className="popular-models-section">
      {/* <div className="popular-models-header">
        <h2 class="cursive-text">Popular Models</h2>
        <div className="underline">--------&lt;&gt;--------</div>
      </div> */}
      <div className="model-images-section">
        <div className="model-grid">
          {models.map((model, index) => (
            <div key={index} className="model-item">
              <img src={model.image} alt={model.name} />
              <div className="model-details">
                <h3>{model.name}</h3>
                <p>{model.type}</p>
                <div className="feature-list">
                  <div className="feature">
                    Height <span>{model.height}</span>
                  </div>
                  <div className="feature">
                    Weight <span>{model.weight}</span>
                  </div>
                  <div className="feature">
                    Hair <span>{model.hair}</span>
                  </div>
                  <div className="feature">
                    Dress <span>{model.dress}</span>
                  </div>
                  <div className="feature">
                    Bust <span>{model.bust}</span>
                  </div>
                  <div className="feature">
                    Waist <span>{model.waist}</span>
                  </div>
                  <div className="feature">
                    Hips <span>{model.hips}</span>
                  </div>
                  <div className="feature">
                    Age <span>{model.age}</span>
                  </div>
                  <div className="feature">
                    Eyes <span>{model.eyes}</span>
                  </div>
                </div>
                <div className="social-media">
                  <button className="facebook-icon">Fb</button>
                  <button className="twitter-icon">Tw</button>
                  <button className="google-icon">G+</button>
                  <button className="instagram-icon">In</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleRows * 5 < initialModels.length && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <button onClick={loadMoreModels} className="load-more-btn">
              Load More...
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PopularModels;
