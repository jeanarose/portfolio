import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="gradient-section">
        <About />
        <Portfolio />
        <Footer />
      </div>
    </>
  );
}

export default App;
