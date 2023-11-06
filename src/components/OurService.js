import React from "react";
import "./Our_Services.css";

const OurService = () => {
  return (
    <div>
      <div className="service">
        <p className="service-text">Our Services</p>
      </div>
      <div className="underline" style={{ marginBottom: "40px" }}>
        ----&lt;&gt;----
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: "130px",
        }}
        className="all-services"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginLeft: "60px",
          }}
        >
          <div
            style={{
              borderRadius: "5px",
              backgroundColor: "#ffe8e5",
              padding: "2px 15px",
            }}
          >
            <p>Promotional Models</p>
          </div>

          <div
            style={{
              borderRadius: "5px",
              backgroundColor: "#ffe8e5",
              padding: "2px 15px",
            }}
          >
            <p>Event Management</p>
          </div>

          <div
            style={{
              borderRadius: "5px",
              backgroundColor: "#ffe8e5",
              padding: "2px 15px",
            }}
          >
            <p>Photography Models</p>
          </div>

          <div
            style={{
              borderRadius: "5px",
              backgroundColor: "#ffe8e5",
              padding: "2px 15px",
            }}
          >
            <p>Television Models</p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginRight: "60px",
          }}
        >
          <div
            style={{
              borderRadius: "5px",
              backgroundColor: "#ffe8e5",
              padding: "2px 15px",
            }}
          >
            <p>Brand Ambassadors</p>
          </div>

          <div
            style={{
              borderRadius: "5px",
              backgroundColor: "#ffe8e5",
              padding: "2px 15px",
            }}
          >
            <p>Studio Rentals</p>
          </div>

          <div
            style={{
              borderRadius: "5px",
              backgroundColor: "#ffe8e5",
              padding: "2px 15px",
            }}
          >
            <p>Runway Models</p>
          </div>

          <div
            style={{
              borderRadius: "5px",
              backgroundColor: "#ffe8e5",
              padding: "2px 15px",
            }}
          >
            <p>Marketing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
