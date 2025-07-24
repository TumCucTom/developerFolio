import React, {useContext} from "react";
import "./Achievement.scss";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  if (!achievementSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-container">
          <div className="achievement-side-image left-image">
            <img
              src={require("../../assets/images/personal-images/5.webp")}
              alt="Holly Wilson - Achievement"
              className="achievement-image"
            />
          </div>
          
          <div className="achievement-main-div">
            <div className="achievement-header">
              <h1
                className={
                  isDark
                    ? "dark-mode heading achievement-heading"
                    : "heading achievement-heading"
                }
              >
                {achievementSection.title}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode subTitle achievement-subtitle"
                    : "subTitle achievement-subtitle"
                }
              >
                {achievementSection.subtitle}
              </p>
            </div>
            <div className="achievement-bullets-div">
              {achievementSection.achievementsCards.map((card, i) => {
                return (
                  <div key={i} className="achievement-bullet">
                    <span className="bullet-text">{card.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="achievement-side-image right-image">
            <img
              src={require("../../assets/images/personal-images/26.webp")}
              alt="Holly Wilson - Achievement"
              className="achievement-image"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
