import React, {useContext} from "react";
import "./Travel.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Travel() {
  const {isDark} = useContext(StyleContext);
  
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={isDark ? "dark-mode main" : "main"} id="travel">
        <div className="travel-main-div">
          <div className="travel-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading travel-heading"
                  : "heading travel-heading"
              }
            >
              Travel Adventures
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle travel-subtitle"
                  : "subTitle travel-subtitle"
              }
            >
              Exploring over 30 countries independently and creating unforgettable memories
            </p>
          </div>
          
          <div className="travel-gallery">
            {/* Left side photos */}
            <div className="side-photos left-photos">
              <div className="small-photo-container">
                <img
                  src={require("../../assets/images/personal-images/1.webp")}
                  alt="Travel 1"
                  className="small-travel-photo"
                />
              </div>
              <div className="small-photo-container">
                <img
                  src={require("../../assets/images/personal-images/2.webp")}
                  alt="Travel 2"
                  className="small-travel-photo"
                />
              </div>
              <div className="small-photo-container">
                <img
                  src={require("../../assets/images/personal-images/3.webp")}
                  alt="Travel 3"
                  className="small-travel-photo"
                />
              </div>
            </div>
            
            {/* Main map */}
            <div className="main-photo-container">
              <img
                src={require("../../assets/images/been.png")}
                alt="Travel Map"
                className="main-travel-photo"
              />
            </div>
            
            {/* Right side photos */}
            <div className="side-photos right-photos">
              <div className="small-photo-container">
                <img
                  src={require("../../assets/images/personal-images/7.webp")}
                  alt="Travel 7"
                  className="small-travel-photo"
                />
              </div>
              <div className="small-photo-container">
                <img
                  src={require("../../assets/images/personal-images/8.webp")}
                  alt="Travel 8"
                  className="small-travel-photo"
                />
              </div>
              <div className="small-photo-container">
                <img
                  src={require("../../assets/images/personal-images/9.webp")}
                  alt="Travel 9"
                  className="small-travel-photo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
} 