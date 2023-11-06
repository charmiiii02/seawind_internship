import React from 'react';
import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import ScrollableImageGallery from "./components/ScrollableImageGallery";
import PopularModelsHeader from "./components/PopularModelsHeader";
import PopularModels from "./components/PopularModels";
import Banner from "./components/Banner";
import ModelCategories from "./components/ModelCategories";
import OurService from "./components/OurService";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";




function App() {
  return (
    <div>
      <NavigationBar />
      <ScrollableImageGallery />
      <PopularModelsHeader />
      <PopularModels />
      <Banner />
      <ModelCategories />
      <OurService />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
