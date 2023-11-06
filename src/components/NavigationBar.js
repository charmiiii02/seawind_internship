// NavigationBar.js
import React from "react";
import "./NavigationBar.css";

function NavigationBar() {
  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("about");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <div className="nav-items">
        <a href="#home">Home</a>
        <a href="#models">Models</a>
        <a href="#register">Register as a Model</a>
        <a href="#hire">Hire as a Model</a>
        <a href="#services">Services</a>
        <a href="#about" onClick={scrollToAboutUs}>
          About us
        </a>
        <a href="#contact">Contact us</a>
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>
    </nav>
  );
}

export default NavigationBar;
