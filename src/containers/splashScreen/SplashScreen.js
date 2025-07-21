import React, {useContext} from "react";
import "./SplashScreen.css";
import {greeting, splashScreen} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <div className="dental-animation">
          <svg className="tooth-svg" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
            {/* Main tooth outline */}
            <path 
              d="M25 15 Q25 8 35 8 L65 8 Q75 8 75 15 L75 25 Q75 30 70 30 L65 30 Q60 30 60 35 L60 40 Q60 45 65 45 L70 45 Q75 45 75 50 L75 60 Q75 65 70 65 L30 65 Q25 65 25 60 L25 50 Q25 45 30 45 L35 45 Q40 45 40 40 L40 35 Q40 30 35 30 L30 30 Q25 30 25 25 Z" 
              fill="none" 
              stroke="#9b6b9e" 
              strokeWidth="2.5"
              className="tooth-path"
            />
            {/* Tooth root */}
            <path 
              d="M30 65 L30 95 Q30 105 40 105 L60 105 Q70 105 70 95 L70 65" 
              fill="none" 
              stroke="#9b6b9e" 
              strokeWidth="2.5"
              className="tooth-root-path"
            />
            {/* Cusp details */}
            <path 
              d="M35 15 L35 25 M45 12 L45 22 M55 12 L55 22 M65 15 L65 25" 
              fill="none" 
              stroke="#9b6b9e" 
              strokeWidth="1.5"
              className="tooth-details"
            />
            {/* Sparkles */}
            <circle cx="30" cy="20" r="1.5" fill="#ffd700" className="sparkle sparkle-1"/>
            <circle cx="70" cy="30" r="1.5" fill="#ffd700" className="sparkle sparkle-2"/>
            <circle cx="50" cy="80" r="1.5" fill="#ffd700" className="sparkle sparkle-3"/>
          </svg>
        </div>
      </div>
      <div className="splash-title-container">
        <span className="splash-title">{greeting.username}</span>
      </div>
    </div>
  );
}
