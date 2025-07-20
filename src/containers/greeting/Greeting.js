import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import Gallery from "../../components/gallery/Gallery";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {galleryImages} from "../../config/galleryConfig";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-image-div">
          <Gallery images={galleryImages} />
        </div>
      </div>
    </div>
  );
}
