import React from "react";
import "./AboutUs.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faLightbulb, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
  return (
    <section className="full-about-us" id="about">
      <div className="about-us">
        <p className="about-us-text">About Us</p>
      </div>
      <div className="underline" style={{ marginBottom: "40px" }}>
        --------&lt;&gt;--------
      </div>

      <p
        style={{
          marginTop: "60px",
          marginLeft: "180px",
          width: "40%",
          fontWeight: "500",
        }}
      >
        The point of this article is to help you grasp the big picture of
        getting six pack abs. In short, to get six pack abs, you need to get
        leaner and develop your abs' musculature. This is done through training
        and nutrition. The topic of nutrition is covered extensively elsewhere
        on the net: I won't delve in it. Training-wise, to build six pack abs,
        you must combine cardio exercise. weightlifting, and abdominal
        exercises. All three are important, and to really get results you must
        do all three.
      </p>
      <p
        style={{
          marginTop: "10px",
          marginLeft: "180px",
          width: "40%",
          fontWeight: "500",
        }}
      >
        Cardio makes you leaner, which is necessary if you want your abs to
        show. Weightlifting makes you leaner, too, by increasing your resting
        metabolic rate and the amount of calories you burn at rest. Good
        weightlifting routines for fat loss are also available elsewhere online.
        Finally, abdominal exercises are needed to define your abs and give them
        the six pack look
      </p>

      
    </section>
  );
};

export default AboutUs;
