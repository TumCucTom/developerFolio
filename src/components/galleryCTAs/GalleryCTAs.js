import React from "react";
import "./GalleryCTAs.scss";

export default function GalleryCTAs() {
  const galleryLinks = {
    linkedin: "https://www.linkedin.com/in/hollywilson/",
    gmail: "happyhealthyhols@gmail.com",
    instagram: "https://www.instagram.com/happyhealthyhols?igsh=MWx3OWhrZ2ViNnJ2&utm_source=qr",
    tiktok: "https://www.tiktok.com/@hwilsonnnnnn?_t=ZN-8y3U0EM7w3C&_r=1",
    youtube: "https://youtube.com/@happyhealthyhols?si=jIEjPRAodotGRrmc",
    strava: "https://strava.app.link/H1McqByW1Ub",
    linktree: "https://linktr.ee/Hollyfitness02?fbclid=PAQ0xDSwLjgNMBpgPxneFHqCpMddNy47OYO0gDfF8TqvXfyXv65I3SFZtcAln9b_hT6kym9A_aem_AU47-Z5in9dnfEpap2FMK_Ane2zhNahzI9BasRw9QV06WwM86mNJmirS9i0LfXPmsI8"
  };

  return (
    <div className="gallery-ctas-container">
      <div className="gallery-ctas-grid">
        {/* Top Row - 4 icons */}
        <div className="gallery-ctas-row top-row">
          {galleryLinks.linkedin && (
            <a
              href={galleryLinks.linkedin}
              className="gallery-cta-button linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
              <span className="gallery-cta-label">LinkedIn</span>
            </a>
          )}

          {galleryLinks.gmail && (
            <a
              href={`mailto:${galleryLinks.gmail}`}
              className="gallery-cta-button email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
              <span className="gallery-cta-label">Email</span>
            </a>
          )}

          {galleryLinks.instagram && (
            <a
              href={galleryLinks.instagram}
              className="gallery-cta-button instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
              <span className="gallery-cta-label">Instagram</span>
            </a>
          )}

          {galleryLinks.tiktok && (
            <a
              href={galleryLinks.tiktok}
              className="gallery-cta-button tiktok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-tiktok"></i>
              <span className="gallery-cta-label">TikTok</span>
            </a>
          )}
        </div>

        {/* Bottom Row - 3 icons */}
        <div className="gallery-ctas-row bottom-row">
          {galleryLinks.youtube && (
            <a
              href={galleryLinks.youtube}
              className="gallery-cta-button youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
              <span className="gallery-cta-label">YouTube</span>
            </a>
          )}

          {galleryLinks.strava && (
            <a
              href={galleryLinks.strava}
              className="gallery-cta-button strava"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-running"></i>
              <span className="gallery-cta-label">Strava</span>
            </a>
          )}

          {galleryLinks.linktree && (
            <a
              href={galleryLinks.linktree}
              className="gallery-cta-button linktree"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-link"></i>
              <span className="gallery-cta-label">Linktree</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 