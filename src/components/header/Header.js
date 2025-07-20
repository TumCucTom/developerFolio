import React from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import {
  greeting,
  workExperiences,
  skillsSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;

  return (
    <Headroom>
      <header className="header">
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          {viewExperience && (
            <li>
              <a href="#experience">Work Experience</a>
            </li>
          )}
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#travel">Travel</a>
          </li>
          {viewAchievement && (
            <li>
              <a href="#achievements">Personal Brand</a>
            </li>
          )}
          <li>
            <a href="#brand-deals">Brand Deals</a>
          </li>
          <li>
            <a href="#group-trips">Group Trips</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>

        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
