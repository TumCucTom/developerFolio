import React from "react";
import "./PhotoCarousel.scss";

export default function PhotoCarousel({ images, title }) {
  // Duplicate images for seamless scrolling
  const duplicatedImages = [...images, ...images];
  
  return (
    <div className="photo-carousel-container">
      {title && (
        <div className="carousel-title">
          <h3>{title}</h3>
        </div>
      )}
      <div className="carousel-track">
        {duplicatedImages.map((image, index) => (
          <div key={`image-${index}`} className="carousel-item">
            <img
              src={require(`../../assets/images/personal-images/${image}`)}
              alt={`Carousel image ${index + 1}`}
              className="carousel-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
} 