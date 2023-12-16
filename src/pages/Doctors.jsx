import React from "react";
import Bcrumbs from "../components/Bcrumbs";
import Sectionhead from "../components/Sectionhead";
import "../css/Doctors.css";

export default function Doctors() {
  function doctorsData() {
    var doctorsList = [
      {
        id: 1,
        name: "Dr K. A Chacko",
        role: "Chief Medical Officer",
        qualifications: "MBBS, FCAMS",
        image:
          "https://yt3.googleusercontent.com/ytc/APkrFKYQtHv2GYhbAQkrTRknWk6YVrDLLZk1YovsUcT0Aw=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        id: 2,
        name: "Dr K. A Chacko",
        role: "Chief Medical Officer",
        qualifications: "MBBS, FCAMS",
        image:
          "https://yt3.googleusercontent.com/ytc/APkrFKYQtHv2GYhbAQkrTRknWk6YVrDLLZk1YovsUcT0Aw=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        id: 3,
        name: "Dr K. A Chacko",
        role: "Chief Medical Officer",
        qualifications: "MBBS, FCAMS",
        image:
          "https://yt3.googleusercontent.com/ytc/APkrFKYQtHv2GYhbAQkrTRknWk6YVrDLLZk1YovsUcT0Aw=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        id: 4,
        name: "Dr K. A Chacko",
        role: "Chief Medical Officer",
        qualifications: "MBBS, FCAMS",
        image:
          "https://yt3.googleusercontent.com/ytc/APkrFKYQtHv2GYhbAQkrTRknWk6YVrDLLZk1YovsUcT0Aw=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        id: 5,
        name: "Dr K. A Chacko",
        role: "Chief Medical Officer",
        qualifications: "MBBS, FCAMS",
        image:
          "https://yt3.googleusercontent.com/ytc/APkrFKYQtHv2GYhbAQkrTRknWk6YVrDLLZk1YovsUcT0Aw=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        id: 6,
        name: "Dr K. A Chacko",
        role: "Chief Medical Officer",
        qualifications: "MBBS, FCAMS",
        image:
          "https://yt3.googleusercontent.com/ytc/APkrFKYQtHv2GYhbAQkrTRknWk6YVrDLLZk1YovsUcT0Aw=s900-c-k-c0x00ffffff-no-rj",
      },
      // Add more doctor objects as needed
    ];
    return (
      <div className="row">
        {doctorsList.map((doctor) => (
          <div key={doctor.id} className="col-md-6 col-lg-4 col-xl-3">
            <div className="member d-flex flex-column align-items-center justify-content-center">
              <div className="pic">
                <img src={doctor.image} className="mb-3" alt="" />
              </div>
              <div className="member-info text-center">
                <h4>{doctor.name}</h4>
                <span>{doctor.qualifications}</span>
                <span>{doctor.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <Bcrumbs breadcrumbspage="Doctors" />
      <section className="Doctors" id="Doctors">
        <Sectionhead
          sectionname="Doctors"
          sectiondescription="Our"
          sectiondescriptionbold="Doctors"
        />
        <div className="container">{doctorsData()}</div>
      </section>
    </>
  );
}
