import React, { useEffect, useState } from "react";
import "../css/Home.css";
import Homecarousel from "../components/Homecarousel";
import About from "../components/About";
import Homedepartments from "../components/Homedepartments";
// import { getPhotosByQuery } from "../api/fetch";
import Homerecentnews from "../components/Homerecentnews";

export default function Home() {
  // const [photos, setPhotos] = useState([]);
  // const [firstPic, setFirstPic] = useState(null);
  // const [firstSixPics, setFirstSixPics] = useState([]);

  const photos = [
    {
      id: 1,
      urls: {
        small: "https://source.unsplash.com/random/800x600?medical=1",
      },
    },
    {
      id: 2,
      urls: {
        small: "https://source.unsplash.com/random/800x600?medical=2",
      },
    },
    {
      id: 3,
      urls: {
        small: "https://source.unsplash.com/random/800x600?medical=3",
      },
    },
    {
      id: 4,
      urls: {
        small: "https://source.unsplash.com/random/800x600?medical=4",
      },
    },
    {
      id: 5,
      urls: {
        small: "https://source.unsplash.com/random/800x600?medical=5",
      },
    },
    {
      id: 6,
      urls: {
        small: "https://source.unsplash.com/random/800x600?medical=6",
      },
    },
  ];

  const aboutBanner = "https://source.unsplash.com/random/800x600?medical=5";

  const recentNews = [
    {
      id: 1,
      imageSrc: "https://source.unsplash.com/random/800x600?medical=1",
      date: "Tue, December 12",
      title: "Dialysis unit",
      description: "Available from Monday to Saturday",
    },
    {
      id: 2,
      imageSrc: "https://source.unsplash.com/random/800x600?medical=2",
      date: "Fri, September 05",
      title: "Home care services available",
      description:
        "For additional information and booking CONTACT US 0469 278 2262, 8281161330",
    },
    {
      id: 3,
      imageSrc: "https://source.unsplash.com/random/800x600?medical=3",
      date: "Tue, July 27",
      title: "MORTUARY SERVICES AVAILABLE 24*7",
      description: "CONTACT US 0469 2682262, 8281161330",
    },
    {
      id: 4,
      imageSrc: "https://source.unsplash.com/random/800x600?medical=4",
      date: "Wed, October 18",
      title: "Emergency Medical Services",
      description: "Call 911 for immediate assistance",
    },
    {
      id: 5,
      imageSrc: "https://source.unsplash.com/random/800x600?medical=5",
      date: "Sat, May 01",
      title: "Health and Wellness Workshops",
      description: "Join us for informative sessions on staying healthy",
    },
  ];

  const HomedepartmentsData = [
    {
      id: "general-medicine",
      name: "General Medicine",
      imageSrc:
        "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/medical-logo.jpg",
      description:
        "The department of general medicine deals with the prevention, diagnosis, and treatment of adult diseases.",
    },
    {
      id: "cardiology",
      name: "Cardiology",
      imageSrc:
        "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/medical-logo.jpg",
      description:
        "The department of cardiology diagnoses and provides treatment for disorders related to heart and cardiovascular system.",
    },
    {
      id: "pediatrics",
      name: "Pediatrics",
      imageSrc:
        "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/medical-logo.jpg",
      description:
        "The department provides medical care to infants, children, adolescents, and young adults.",
    },
    {
      id: "orthopedics",
      name: "Orthopedics",
      imageSrc:
        "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/medical-logo.jpg",
      description:
        "Provide medical care for issues related to the musculoskeletal system and treating injuries to bones, joints, ligaments, or tendons.",
    },
    {
      id: "nephrology",
      name: "Nephrology",
      imageSrc:
        "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/medical-logo.jpg",
      description:
        "Provides OPD based medical care for diseases related to the kidney.",
    },
    {
      id: "ent",
      name: "ENT",
      imageSrc:
        "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/medical-logo.jpg",
      description:
        "Medical specialty which provides treatment to diseases related to Ear, Nose, and Throat. We provide OPD based care.",
    },
  ];

  // useEffect(() => {
  //   if (photos.length === 0) {
  //     const searchQuery = "hospital";
  //     getPhotosByQuery(searchQuery)
  //       .then((data) => {
  //         console.log("Fetched data:", data);
  //         setPhotos(data.results.slice(6, 15));
  //         setFirstPic(
  //           data.results.length > 0 ? data.results[0].urls.small : null
  //         );
  //         setFirstSixPics(data.results.slice(0, 6));
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });
  //   }
  // }, [photos]);

  return (
    <>
      <Homecarousel photos={photos} />
      <About aboutBanner={aboutBanner} />
      <Homedepartments homedepartments={HomedepartmentsData} />
      <Homerecentnews recentNews={recentNews} />
    </>
  );
}
