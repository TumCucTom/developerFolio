import React, {useContext} from "react";
import "./GroupTrips.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function GroupTrips() {
  const {isDark} = useContext(StyleContext);
  
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={isDark ? "dark-mode main" : "main"} id="group-trips">
        <div className="group-trips-main-div">
          <div className="group-trips-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading group-trips-heading"
                  : "heading group-trips-heading"
              }
            >
              HappyhealthyHOLS Group Trips
            </h1>
          </div>
          
          <div className="group-trips-content">
            <p
              className={
                isDark
                  ? "dark-mode subTitle group-trips-description"
                  : "subTitle group-trips-description"
              }
            >
              My wish for these group trips were to create travel opportunities for other students/ young adults, with minimal disposable income, who are desperate to explore new places or try new challenges! I organise them entirely myself, typically shopping and cooking all the meals (except for the surf camps), and I work with brands directly and exchange social media content for their gifting to guests, all to keep the costs to a minimum. The overwhelming level of positive feedback from each and every trip, and the friendships that have formed and exist far beyond the flight home, leaves me fired up to organise the next when I get a university holiday!
            </p>
            
            <div className="previous-trips-section">
              <h2
                className={
                  isDark
                    ? "dark-mode subTitle section-subtitle"
                    : "subTitle section-subtitle"
                }
              >
                Previous Trips
              </h2>
              
              <div className="country-maps">
                <div className="country-map-container">
                  <img
                    src={require("../../assets/images/maps/costa_rica.png")}
                    alt="Costa Rica map"
                    className="country-map-image"
                    loading="lazy"
                  />
                  <h3 className="map-country-name">Costa Rica</h3>
                </div>
                
                <div className="country-map-container">
                  <img
                    src={require("../../assets/images/maps/portugal.png")}
                    alt="Portugal map"
                    className="country-map-image"
                    loading="lazy"
                  />
                  <h3 className="map-country-name">Portugal</h3>
                </div>
                
                <div className="country-map-container">
                  <img
                    src={require("../../assets/images/maps/uk.png")}
                    alt="United Kingdom map"
                    className="country-map-image"
                    loading="lazy"
                  />
                  <h3 className="map-country-name">United Kingdom</h3>
                </div>
              </div>
              
              <div className="country-boxes">
                <div className="country-box">
                  <div className="trip-details">
                    <div className="trip-item">
                      <span className="trip-year">2023</span>
                      <span className="trip-location">Costa Rica (14 people)</span>
                      <span className="trip-activities">Canyoneering, kayaking, volcano hikes, organic farms and adventuring</span>
                    </div>
                  </div>
                  <div className="trip-image-container">
                    <img
                      src={require("../../assets/images/personal-images/4.webp")}
                      alt="Costa Rica Trip"
                      className="trip-image"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                <div className="country-box">
                  <div className="trip-details">
                    <div className="trip-item">
                      <span className="trip-year">2024</span>
                      <span className="trip-location">Lagos, Portugal (25 people)</span>
                      <span className="trip-activities">Surf Camp</span>
                    </div>
                    <div className="trip-item">
                      <span className="trip-year">2025</span>
                      <span className="trip-location">Lagos, Portugal (25 people)</span>
                      <span className="trip-activities">Surf Camp</span>
                    </div>
                    <div className="trip-item">
                      <span className="trip-year">2025</span>
                      <span className="trip-location">Lisbon, Portugal (32 people)</span>
                      <span className="trip-activities">Superhalf marathon!</span>
                    </div>
                  </div>
                </div>
                
                <div className="country-box">
                  <div className="trip-details">
                    <div className="trip-item">
                      <span className="trip-year">2024</span>
                      <span className="trip-location">'A Touch of Sunshine in Winter', Lake District UK (22 people)</span>
                      <span className="trip-activities">For those who could not afford/get annual leave for long holidays, this long weekend was a perfect local break, with a yoga instructor and daily flows, group runs, and movie nights to bring some joy to the darker months!</span>
                    </div>
                    <div className="trip-item">
                      <span className="trip-year">2025</span>
                      <span className="trip-location">'A Touch of Sunshine in Winter', Lake District UK (22 people)</span>
                      <span className="trip-activities">Local winter break with yoga, group runs, and movie nights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
} 