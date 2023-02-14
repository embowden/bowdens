import React from "react";
import "./App.scss";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Burger from "./components/Burger/Burger";
import LogoTop from "./components/Header/LogoTop";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
        <div>
          <Burger />
          <LogoTop />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
