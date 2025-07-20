import React, {useContext} from "react";
import "./Gap.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Gap() {
  const {isDark} = useContext(StyleContext);
  
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={isDark ? "dark-mode main" : "main"} id="gap">
        <div className="gap-main-div">
          <div className="gap-image-container">
            <img
              src={require("../../assets/images/personal-images/6.jpeg")}
              alt="Holly Wilson"
              className="gap-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
} 