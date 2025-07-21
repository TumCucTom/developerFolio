import React from "react";
import "./Greeting.scss";
import {greeting} from "../../portfolio";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-image-div">
          <div className="single-image-container">
            <img
              src={require("../../assets/images/personal-images/20.webp")}
              alt="Holly Wilson"
              className="greeting-single-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
