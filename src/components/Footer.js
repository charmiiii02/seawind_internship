import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-boxes">
        <div
          style={{
            width: "200px",
            backgroundColor: "#e75480",
            height: "120px",
            padding: "10px 0px",
            color: "white",
          }}
        >
          <h3
            style={{ width: "max-content", margin: "auto", paddingTop: "25px" }}
          >
            Address
          </h3>
          <hr style={{ width: "50px" }} />
          <p style={{ width: "max-content", margin: "auto" }}>Subtext</p>
        </div>

        <div
          style={{
            width: "200px",
            backgroundColor: "#e75480",
            height: "120px",
            padding: "10px 0px",
            color: "white",
          }}
        >
          <h3
            style={{ width: "max-content", margin: "auto", paddingTop: "25px" }}
          >
            Email
          </h3>
          <hr style={{ width: "50px" }} />
          <p style={{ width: "max-content", margin: "auto" }}>
            johndoe@gmail.com
          </p>
        </div>

        <div
          style={{
            width: "200px",
            backgroundColor: "#e75480",
            height: "120px",
            padding: "10px 0px",
            color: "white",
          }}
        >
          <h3
            style={{ width: "max-content", margin: "auto", paddingTop: "25px" }}
          >
            Phone
          </h3>
          <hr style={{ width: "50px" }} />
          <p style={{ width: "max-content", margin: "auto" }}>+91-1234567890</p>
        </div>

        <div
          style={{
            width: "200px",
            backgroundColor: "#e75480",
            height: "120px",
            padding: "10px 0px",
            color: "white",
          }}
        >
          <h3
            style={{ width: "max-content", margin: "auto", paddingTop: "25px" }}
          >
            Portfolio
          </h3>
          <hr style={{ width: "50px" }} />
          <p style={{ width: "max-content", margin: "auto" }}>
            www.modeling.info
          </p>
        </div>
      </div>

    </div>
  );
};

export default Footer;
