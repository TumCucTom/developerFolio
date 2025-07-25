import React, { useEffect, useRef } from "react";
import "./PhotoCarousel.scss";

export default function PhotoCarousel({ images, title, folder = "personal-images" }) {
  const trackRef = useRef(null);
  
  // Create enough duplicates for seamless scrolling
  const shuffledImages = [...images].sort(() => Math.random() - 0.5);
  // Triple the images to ensure smooth infinite scroll
  const extendedImages = [...shuffledImages, ...shuffledImages, ...shuffledImages];
  
  return (
    <div className="photo-carousel-container">
      {title && (
        <div className="carousel-title">
          <h3>{title}</h3>
        </div>
      )}
      <div className="carousel-wrapper">
        <div 
          ref={trackRef}
          className="carousel-track"
          style={{
            '--image-count': shuffledImages.length,
            '--total-images': extendedImages.length
          }}
        >
          {extendedImages.map((image, index) => (
            <div key={`image-${index}`} className="carousel-item">
              <img
                src={require(`../../assets/images/${folder}/${image}`)}
                alt={`Carousel image ${index + 1}`}
                className="carousel-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 