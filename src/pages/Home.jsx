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

  const aboutData = {
    aboutBanner: "https://source.unsplash.com/random/800x600?medical=5",
    aboutHead: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    aboutDesc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                vitae odit voluptas architecto, maiores beatae doloremque nisi.
                Non maiores odio unde fugit quae tenetur minus ad, molestias
                ipsum. Perspiciatis eos nobis ab porro impedit iusto assumenda
                veritatis, quaerat, laboriosam dignissimos maiores voluptates
                repellendus nam magnam libero obcaecati sint non dolore.
                Molestias voluptatibus consequatur modi commodi magni neque sint
                ab repudiandae ullam. Enim sapiente recusandae perferendis
                expedita quos neque alias voluptate autem provident.`,
  };

  const initialNewsData = [
    {
      id: 1,
      title: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://images.hdqwalls.com/wallpapers/hellsweeper-vr-sy.jpg",
      shortDesc:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugit nisi consequatur eligendi est doloribus! Adipisci natus quibusdam a doloremque Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugit nisi consequatur eligendi est doloribus! Adi Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugit nisi consequatur eligendi est doloribus! Adi Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugit nisi consequatur eligendi est doloribus! Adi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugit nisi consequatur eligendi est doloribus! Adipisci natus quibusdam a doloremque?",
      date: "August 2023",
    },
    {
      id: 2,
      title: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit",
      image: "https://images.hdqwalls.com/wallpapers/hellsweeper-vr-sy.jpg",
      shortDesc:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugit nisi consequatur eligendi est doloribus! Adipisci natus quibusdam a doloremque?",
      date: "August 2023",
    },
    {
      id: 3,
      title: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://images.hdqwalls.com/wallpapers/hellsweeper-vr-sy.jpg",
      shortDesc:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugit nisi consequatur eligendi est doloribus! Adipisci natus quibusdam a doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugit nisi consequatur eligendi est doloribus! Adipisci natus quibusdam a doloremque?",
      date: "August 2023",
    },
    {
      id: 4,
      title: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit",
      image: "https://images.hdqwalls.com/wallpapers/hellsweeper-vr-sy.jpg",
      shortDesc:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugit nisi consequatur eligendi est doloribus! Adipisci natus quibusdam a doloremque?",
      date: "August 2023",
    },
    // Add more news items as needed
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
      <About aboutData={aboutData} />
      <Homedepartments homedepartments={HomedepartmentsData} />
      <Homerecentnews recentNews={initialNewsData} />
    </>
  );
}
