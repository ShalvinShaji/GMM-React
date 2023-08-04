import React, { useEffect } from "react";
import "../css/Homecarousel.css";

export default function Homecarousel() {
  useEffect(() => {
    // Initialize the carousel when the component mounts
    const carousel = new bootstrap.Carousel(document.getElementById('carouselExampleAutoplaying'));

    // Dispose the carousel when the component unmounts
    return () => {
      carousel.dispose();
    };
  }, []);
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-pause="false"
        

      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="6000">
            <img
              src="https://images.hdqwalls.com/wallpapers/i-am-iron-man-marvels-avengers-62.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="6000">
            <img
              src="https://images.hdqwalls.com/wallpapers/hulk-marvels-avengers-40.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="6000">
            <img
              src="https://images.hdqwalls.com/wallpapers/love-never-ends-wallpaper.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
