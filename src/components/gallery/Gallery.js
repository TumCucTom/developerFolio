import React, { useState } from 'react';
import './Gallery.scss';
import SocialMedia from '../socialMedia/SocialMedia';

const Gallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };



  return (
    <div className="gallery-container">
      <div className="gallery-slider">
        <button className="gallery-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        
        <div className="gallery-slide">
          <img 
            src={images[currentIndex].src} 
            alt={images[currentIndex].alt}
            className="gallery-image"
            loading="eager"
            onError={(e) => {
              console.error('Image failed to load:', images[currentIndex].src);
              e.target.style.display = 'none';
            }}
          />
        </div>
        
        <button className="gallery-button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      

      <div className="gallery-ctas">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Gallery; 