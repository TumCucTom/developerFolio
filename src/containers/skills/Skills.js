import React, {useContext} from "react";
import "./Skills.scss";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
          <div className="skills-image-div">
            <div className="about-me-left-content">
              <div className="personal-image-container">
              <img
                  alt="Holly Wilson"
                  src={require("../../assets/images/personal-images/20.webp")}
                  className="personal-image"
                />
              </div>
              <div className="follower-count">
                <div className="follower-text">
                  <div className="count">100k+</div>
                  <div className="label">Following</div>
                </div>
              </div>
            </div>
          </div>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <div className="about-description">
              {skillsSection.description.map((paragraph, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
      </div>
    </div>
  );
}
