import React, { useState } from 'react';
import './ImageCarousel.css'; // Make sure to create a corresponding CSS file

const ImageCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const goToNext = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const goToPrev = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="carousel-container">
      <h3>Gallery</h3>
      <button className="left-arrow" onClick={goToPrev}>&lt;</button>
      <div className="carousel-main-image">
        <img src={images[current]} alt={`Slide ${current}`} />
      </div>
      <button className="right-arrow" onClick={goToNext}>&gt;</button>
      <div className="carousel-thumbnails">
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Thumbnail ${index}`}
            className={index === current ? 'thumbnail active' : 'thumbnail'}
            onClick={() => setCurrent(index)} 
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
