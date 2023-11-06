import React from "react";
import "./Model_Categories.css";

import model1 from "../assets/Model 2.jpg";
import model2 from "../assets/Model 3.jpg";
import model4 from "../assets/model4.jpg";
import model5 from "../assets/Model 5.jpg";

const ModelCategories = () => {
  return (
    <div style={{ backgroundColor: "#ffe8e5" }}>
      <div className="model-categories">
        <p className="cursive-text">Model Categories</p>
      </div>
      <div className="underline">----------&lt;&gt;----------</div>
      <div className="model-columns">
        <div>
          <div style={{  padding: '15px' }} >
            <h3
              style={{ margin: "0px", textAlign: "centre",  paddingLeft: '75px'}}
              className="model-text"
            >
              FEMALE MODEL
            </h3>
            <button
              style={{
                backgroundColor: "#c23479",
                color: "white",
                border: "none",
                margin: "0px 95px 10px",
              }}
            >
              Explore Profiles
            </button>
          </div>

          <img src={model1} alt="text" className="model-img" />

          <div style={{ marginTop: "150px", padding: '35px', textAlign: "center" }} >
  <h3 style={{ margin: "0px" }} className="model-text">
    CELEBRITY MODEL
  </h3>
  <button
    style={{
      backgroundColor: "#c23479",
      color: "white",
      border: "none",
      padding: "2px", // You can adjust the padding to control the button size
      marginTop: "10px",
    }}
  >
    Explore Profiles
  </button>
</div>

          <img src={model4} alt="text" className="model-img"  />
        </div>
        <div style={{ marginTop: "50px", paddingTop: "50px" }}>
          <div>
            <h3
              style={{ margin: "0px", textAlign: "center" , }}
              className="model-text"
            >
              MALE MODEL
            </h3>
            <button
              style={{
                backgroundColor: "#c23479",
                color: "white",
                border: "none",
                margin: "0px 95px 10px",
              }}
            >
              Explore Profiles
            </button>
          </div>
          <img src={model2} alt="text" className="model-img" />

          <div style={{ marginTop: "20px" }}>
            <h3
              style={{ margin: "0px", textAlign: "center" }}
              className="model-text"
            >
              CHILDREN MODEL
            </h3>
            <button
              style={{
                backgroundColor: "#c23479",
                color: "white",
                border: "none",
                margin: "0px 95px 10px",
              }}
            >
              Explore Profiles
            </button>
          </div>
          <img src={model5} alt="text" className="model-img" />
        </div>
      </div>{" "}
    </div>
  );
};

export default ModelCategories;
