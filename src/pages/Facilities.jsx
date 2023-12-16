import React from "react";
import Bcrumbs from "../components/Bcrumbs";
import Sectionhead from "../components/Sectionhead";
import "../css/Facilities.css";

export default function Facilities() {
  function facilitiesData() {
    const facilitiesList = [
      {
        id: 1,
        name: "Casualty",
        image:
          "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/medical-logo.jpg",
      },
      {
        id: 2,
        name: "Casualty",
        image:
          "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/medical-logo.jpg",
      },
      {
        id: 3,
        name: "Casualty",
        image:
          "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/medical-logo.jpg",
      },
      {
        id: 4,
        name: "Casualty",
        image:
          "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/medical-logo.jpg",
      },
    ];
    return (
      <div className="row">
        {facilitiesList.map((facility) => (
          <div className="col-lg-4 col-xl-3 col-md-6" key={facility.id}>
            <div className="facility">
              <div className="facility-img">
                <img src={facility.image} alt={facility.name} />
              </div>
              <div className="facility-name">
                <h3 className="text-uppercase">{facility.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <Bcrumbs breadcrumbspage="Facilities" />
      <section className="Facilities" id="Facilities">
        <Sectionhead
          sectionname="Facilities"
          sectiondescription="Our"
          sectiondescriptionbold="Facilities"
        />
        <div className="container">{facilitiesData()}</div>
      </section>
    </>
  );
}
