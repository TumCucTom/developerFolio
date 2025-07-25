import React from "react";
import "./PhotoCarousel.scss";

export default function PhotoCarousel({ images, title, folder = "personal-images" }) {
  // Shuffle images and then duplicate for seamless scrolling
  const shuffledImages = [...images].sort(() => Math.random() - 0.5);
  const duplicatedImages = [...shuffledImages, ...shuffledImages];
  
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
              src={require(`../../assets/images/${folder}/${image}`)}
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