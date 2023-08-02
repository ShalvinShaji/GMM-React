import React, { useState, useEffect } from "react";
import '../css/Backtotop.css'

const Backtotop = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#"
      id="backToTopBtn"
      className={`back-to-top d-flex align-items-center justify-content-center ${
        isActive ? "active" : ""
      }`}
      onClick={scrollToTop}
    >
      <i className="bx bx-chevron-up"></i>
    </a>
  );
};

export default Backtotop;

