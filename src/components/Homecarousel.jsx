import React, { useEffect } from "react";
import "../css/Homecarousel.css";
export default function Homecarousel({ photos }) {
  useEffect(() => {
    const carouselElement = document.getElementById(
      "carouselExampleAutoplaying"
    );
    if (carouselElement) {
      const carousel = new window.bootstrap.Carousel(carouselElement);
    }
  }, []);

  function homecarouselData() {
    return (
      <div className="carousel-inner">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            data-bs-interval="5000"
          >
            <img
              src={photo.urls.small}
              className="img-fluid w-100"
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-pause="false"
      >
        {homecarouselData()}
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
