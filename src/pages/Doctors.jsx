import React from "react";
import Bcrumbs from "../components/Bcrumbs";
import Sectionhead from "../components/Sectionhead";
import "../css/Doctors.css";

export default function Doctors() {
  function doctorsData() {
    var doctorsList = [
      {
        departmentId: "general-medicine",
        name: "Dr N Damodaran",
        qualifications: "MBBS, MD",
        role: "Chief Physician",
        optime: "Monday- Saturday, 6.00 PM- 9.00 PM",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgFoOhqNVXZCBY2xVkGVNBPZsFZigXvho7A&usqp=CAU",
      },
      {
        departmentId: "cardiology",
        name: "Dr Philipose John",
        qualifications: "MBBS, MD, DM",
        role: "Cardiologist",
        optime: "Saturday, 12.00 PM – 1.00 PM",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgFoOhqNVXZCBY2xVkGVNBPZsFZigXvho7A&usqp=CAU",
      },
      {
        departmentId: "pediatrics",
        name: "Dr Sunnychen Devasia",
        qualifications: "MBBS, DCH",
        role: "Pediatrician",
        optime: "Monday- Saturday, 11.30 AM- 1.00 PM",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgFoOhqNVXZCBY2xVkGVNBPZsFZigXvho7A&usqp=CAU",
      },
      {
        departmentId: "orthopedics",
        name: "Dr Varkey S Kulangara",
        qualifications: "MBBS, MS, DNB, MRCS",
        role: "Orthopedic Surgeon",
        optime: "Monday, Tuesday, Thursday, 5.30 PM- 8.00 PM",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgFoOhqNVXZCBY2xVkGVNBPZsFZigXvho7A&usqp=CAU",
      },
      {
        departmentId: "nephrology",
        name: "Dr Sneha Anna Joy",
        qualifications: "MBBS, MD, DM",
        role: "Consultant Nephrologist",
        optime: "1st & 3rd Saturday, 11.00 AM- 12.00 PM",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgFoOhqNVXZCBY2xVkGVNBPZsFZigXvho7A&usqp=CAU",
      },
      {
        departmentId: "emergency-medicine",
        name: "Dr Rohan Chacko Jacob",
        qualifications: "MBBS",
        role: "Casualty Medical Officer",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgFoOhqNVXZCBY2xVkGVNBPZsFZigXvho7A&usqp=CAU",
        opTiming: "mon-fri 9am - 5pm",
      },
      {
        departmentId: "emergency-medicine",
        name: "Dr Sara Jacob",
        qualifications: "MBBS",
        role: "Casualty Medical Officer",
        optime: "1st & 3rd Saturday, 11.00 AM- 12.00 PM",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgFoOhqNVXZCBY2xVkGVNBPZsFZigXvho7A&usqp=CAU",
      },
      {
        departmentId: "emergency-medicine",
        name: "Dr Midhun Raj",
        qualifications: "MBBS",
        role: "General Practitioner",
        optime: "1st & 3rd Saturday, 11.00 AM- 12.00 PM",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgFoOhqNVXZCBY2xVkGVNBPZsFZigXvho7A&usqp=CAU",
      },
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
