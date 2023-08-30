import React, { useEffect } from "react";
import "../css/Homecarousel.css";
export default function Homecarousel({ photos }) {
  useEffect(() => {
    // Programmatically activate the carousel when the component mounts
    const carouselElement = document.getElementById(
      "carouselExampleAutoplaying"
    );
    if (carouselElement) {
      const carousel = new window.bootstrap.Carousel(carouselElement);
    }
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
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="5000"
            >
              <img
                src={photo.urls.small}
                className="d-block w-100"
                alt={`Slide ${index}`}
              />
            </div>
          ))}
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
