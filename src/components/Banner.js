import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-background">
      <div className="banner-header">
        <p style={{ color: "white", fontSize: "4.5rem", margin: "0px" }}>
          BECOME A MODEL
        </p>
      </div>

      <button className="banner-button">
        <p style={{ fontSize: "1rem", margin: 0 }}>Apply Now</p>
      </button>
    </div>
  );
};

export default Banner;
