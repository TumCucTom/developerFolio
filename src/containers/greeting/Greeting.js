import React from "react";
import "./Greeting.scss";
import Gallery from "../../components/gallery/Gallery";
import {greeting} from "../../portfolio";
import {galleryImages} from "../../config/galleryConfig";

export default function Greeting() {
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
