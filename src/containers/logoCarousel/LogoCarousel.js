import React, {useContext} from "react";
import "./LogoCarousel.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function LogoCarousel() {
  const {isDark} = useContext(StyleContext);
  
  const brands = [
    { name: "LUCA", logo: "luca.jpeg" },
    { name: "Nails Inc", logo: "nails.jpeg" },
    { name: "Vilgain", logo: "vilgain.jpeg" },
    { name: "Zone3", logo: "zone3.jpeg" },
    { name: "Saucony", logo: "saucony.jpeg" },
    { name: "Samurai", logo: "samueai.jpeg" },
    { name: "Shokz", logo: "shokz.jpeg" },
    { name: "Siroko", logo: "siroko.jpeg" },
    { name: "Ninja Kitchen", logo: "ninja.jpg" },
    { name: "Just Giving", logo: "justgiving.jpeg" },
    { name: "Ghanda Clothing", logo: "ghanda.jpeg" },
    { name: "Bodyform", logo: "bodyform.webp" },
    { name: "New Balance", logo: "newbalence.jpeg" },
    { name: "Shreddy", logo: "shreddy.jpeg" }
  ];
  
  // Split brands into two halves for top and bottom rows
  const halfLength = Math.ceil(brands.length / 2);
  const topBrands = brands.slice(0, halfLength);
  const bottomBrands = brands.slice(halfLength);
  
  // Duplicate each half to create seamless scrolling
  const duplicatedTopBrands = [...topBrands, ...topBrands];
  const duplicatedBottomBrands = [...bottomBrands, ...bottomBrands];
  
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={isDark ? "dark-mode main" : "main"} id="logo-carousel">
        <div className="carousel-container">
          {/* First row - left to right */}
          <div className="carousel-track carousel-track-forward">
            {duplicatedTopBrands.map((brand, index) => (
              <div key={`forward-${index}`} className="carousel-item">
                <img
                  src={require(`../../assets/images/brands/${brand.logo}`)}
                  alt={`${brand.name} logo`}
                  className="brand-logo-image"
                />
              </div>
            ))}
          </div>
          
          {/* Second row - right to left */}
          <div className="carousel-track carousel-track-reverse">
            {duplicatedBottomBrands.map((brand, index) => (
              <div key={`reverse-${index}`} className="carousel-item">
                <img
                  src={require(`../../assets/images/brands/${brand.logo}`)}
                  alt={`${brand.name} logo`}
                  className="brand-logo-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
} 