import React, {useContext} from "react";
import "./LogoCarousel.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function LogoCarousel() {
  const {isDark} = useContext(StyleContext);
  
  const brands = [
    "Runna", "Speedo", "Adidas", "Tala", "Puresport", "Sigma Sport",
    "LUCA", "Nails Inc", "vilgain", "zone3", "saucony", "samuri", 
    "shokz", "siroko", "ninja kitchen", "tala", "just giving", 
    "ghanda clothing", "bodyform", "new balence", "shreddy"
  ];
  
  // Duplicate the brands array to create seamless scrolling
  const duplicatedBrands = [...brands, ...brands];
  
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={isDark ? "dark-mode main" : "main"} id="logo-carousel">
        <div className="carousel-container">
          {/* First row - left to right */}
          <div className="carousel-track carousel-track-forward">
            {duplicatedBrands.map((brand, index) => (
              <div key={`forward-${index}`} className="carousel-item">
                <span className="brand-text">{brand}</span>
              </div>
            ))}
          </div>
          
          {/* Second row - right to left */}
          <div className="carousel-track carousel-track-reverse">
            {duplicatedBrands.map((brand, index) => (
              <div key={`reverse-${index}`} className="carousel-item">
                <span className="brand-text">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
} 