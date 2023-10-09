import React from "react";
import Bcrumbs from "../components/Bcrumbs";
import Sectionhead from "../components/Sectionhead";
import "../css/Careers.css";

const careersData = [
  {
    id: 1,
    title: "Consultant General Medicine",
    bannerImage:
      "https://images.hdqwalls.com/wallpapers/mortal-kombat-mobile-logo-5o.jpg",
    contact: "Please send your resume to gmmhospital@gmail.com",
  },
  {
    id: 2,
    title: "Consultant General Medicine",
    bannerImage:
      "https://images.hdqwalls.com/wallpapers/mortal-kombat-mobile-logo-5o.jpg",
    contact: "Please send your resume to gmmhospital@gmail.com",
  },
  {
    id: 3,
    title: "Consultant General Medicine",
    bannerImage:
      "https://images.hdqwalls.com/wallpapers/mortal-kombat-mobile-logo-5o.jpg",
    contact: "Please send your resume to gmmhospital@gmail.com",
  },
  // Add more career objects as needed
];

export default function Careers() {
  return (
    <>
      <Bcrumbs breadcrumbspage="Careers" />
      <section className="Careers" id="Careers">
        <Sectionhead
          sectionname="Careers"
          sectiondescription="Explore Healthcare "
          sectiondescriptionbold="Careers"
        />
        <div className="container">
          <div className="row">
            {careersData.map((career) => (
              <div key={career.id} className="col-lg-4 col-md-6 g-2 p-3 m-0">
                <div className="careers-section">
                  <div className="careers-banner p-2">
                    <img
                      src={career.bannerImage}
                      alt="careers-banner"
                      className="image-fluid"
                    />
                  </div>
                  <div className="careers-description p-2">
                    <div className="careers-title mb-3">
                      <h4 className="text-capitalize">{career.title}</h4>
                    </div>

                    <div className="careers-contact">
                      <p>{career.contact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
