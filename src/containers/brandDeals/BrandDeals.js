import React, {useContext} from "react";
import "./BrandDeals.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function BrandDeals() {
  const {isDark} = useContext(StyleContext);
  
  const mainBrands = [
    { name: "Runna", logo: null },
    { name: "Speedo", logo: null },
    { name: "Adidas", logo: null },
    { name: "Tala", logo: null },
    { name: "Puresport", logo: null },
    { name: "Sigma Sport", logo: null }
  ];


  
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={isDark ? "dark-mode main" : "main"} id="brand-deals">
        <div className="brand-deals-main-div">
          <div className="brand-deals-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading brand-deals-heading"
                  : "heading brand-deals-heading"
              }
            >
              BRAND DEALS
            </h1>
          </div>
          
          {/* Main Brands Section */}
          <div className="main-brands-section">
            <h2
              className={
                isDark
                  ? "dark-mode subTitle section-subtitle"
                  : "subTitle section-subtitle"
              }
            >
              Featured Partnerships
            </h2>
            <div className="main-brands-grid">
              {mainBrands.map((brand, i) => (
                <div key={i} className="brand-box">
                  <div className="brand-logo-container">
                    {brand.logo ? (
                      <img
                        src={require(`../../assets/images/${brand.logo}`)}
                        alt={`${brand.name} logo`}
                        className="brand-logo"
                      />
                    ) : (
                      <div className="brand-logo-placeholder">
                        {brand.name}
                      </div>
                    )}
                  </div>
                  <h3 className="brand-name">{brand.name}</h3>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </Fade>
  );
} 