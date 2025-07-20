import React from "react";
import "./InstagramFollower.scss";

const InstagramFollower = () => {
  // Hard coded to display 100k+ immediately
  const followerCount = 110000;
  const isLoading = false;

  // Function to format follower count with k/m suffixes
  const formatFollowerCount = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 100000) {
      return (count / 1000).toFixed(0) + 'k+';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'k';
    }
    return count.toLocaleString();
  };

  return (
    <div className="instagram-follower">
      <a 
        href="https://www.instagram.com/happyhealthyhols?igsh=MWx3OWhrZ2ViNnJ2&utm_source=qr" 
        target="_blank" 
        rel="noopener noreferrer"
        className="instagram-link"
      >
        <div className="instagram-icon">
          <i className="fas fa-users"></i>
        </div>
        <div className="follower-info">
          <div className="follower-count">
            {isLoading ? (
              <span className="loading">Loading...</span>
            ) : (
              <span className="count">{formatFollowerCount(followerCount)}</span>
            )}
          </div>
          <div className="follower-label">Social Media Following</div>
        </div>
      </a>
    </div>
  );
};

export default InstagramFollower; 