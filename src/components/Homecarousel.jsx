import React, { useEffect, useState } from "react";
import "../css/Homecarousel.css";
import { getPhotosByQuery } from "../api/fetch";

export default function Homecarousel() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (photos.length === 0) {
      const searchQuery = 'festival';
      getPhotosByQuery(searchQuery)
        .then((data) => {
          console.log('Fetched data:', data);
          setPhotos(data.results); // Assuming the response from Unsplash is an array of results
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [photos]);

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
              data-bs-interval="1000"
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
