import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import ibImage from "../../assets/images/ib.jpeg";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">Education</h1>
        <div className="education-content">
          <div className="education-card-container">
            {educationInfo.schools.map((school, index) => (
              <EducationCard key={index} school={school} />
            ))}
          </div>
          <div className="education-image-container">
            <img src={ibImage} alt="IB Diploma" className="education-image" />
          </div>
        </div>
      </div>
    );
  }
  return null;
}
