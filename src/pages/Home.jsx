import React, { useEffect, useState } from "react";
import "../css/Home.css";
import Homecarousel from "../components/Homecarousel";
import About from "../components/About";
import Homedepartments from "../components/Homedepartments";
import { getPhotosByQuery } from "../api/fetch";
import Homerecentnews from "../components/Homerecentnews";
import Cta from "../components/Cta";

export default function Home() {
  const [photos, setPhotos] = useState([]);
  const [firstPic, setFirstPic] = useState(null);
  const [firstSixPics, setFirstSixPics] = useState([]);

  useEffect(() => {
    if (photos.length === 0) {
      const searchQuery = "avengers";
      getPhotosByQuery(searchQuery)
        .then((data) => {
          console.log("Fetched data:", data);
          setPhotos(data.results.slice(0, 3));
          setFirstPic(
            data.results.length > 0 ? data.results[0].urls.small : null
          );
          setFirstSixPics(data.results.slice(0, 6));
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [photos]);
  return (
    <>
      <Homecarousel photos={photos} />
      <About firstPic={firstPic} />
      <Cta/>
      <Homedepartments/>
      <Homerecentnews />
    </>
  );
}
