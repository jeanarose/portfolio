import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Technologies from "./components/Technologies/Technologies";
import About from "./components/About/About";
import Project from "./components/Project/Project";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Project />
      <Footer />
    </>
  );
}

export default App;
