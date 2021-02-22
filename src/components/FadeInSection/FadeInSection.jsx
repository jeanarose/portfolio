import React, { useState, useRef, useEffect } from "react";
import "./FadeInSection.css";

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();
  useEffect(() => {
    // Observes the Project component and calls the callback function entry when one or more of the thresholds are met
    // A threshold can be any ratio from 0 to 1 where 1 means the element is 100% in the viewport and 0 is 100% out of the viewport
    // Threshold = 0 by default
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);


  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection;
