
import React, { useState } from 'react';
import './ScrollableImageGallery.css';

function ScrollableImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['images1.jpg', 'images2.jpg','images3.webp', 'placeholder4.jpg',  ]; // Replace with actual paths to your images

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="image-gallery">
      <button className="nav-button left" onClick={goToPrevious}>‹</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button className="nav-button right" onClick={goToNext}>›</button>
    </div>
  );
}

export default ScrollableImageGallery;
