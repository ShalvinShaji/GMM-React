import React from "react";
import Bcrumbs from "../components/Bcrumbs";
import Sectionhead from "../components/Sectionhead";
import "../css/Visionmission.css";

export default function Visionmission() {
  return (
    <>
      <Bcrumbs breadcrumbspage="Vission & Mission" />
      <section className="Visionmission" id="Visionmission">
        <Sectionhead
          sectionname="Vission & Mission"
          sectiondescription="our"
          sectiondescriptionbold="Vission & Mission"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <img
                src="./assets/img/carousel-images/about.jpg"
                alt=""
                className="h-100 w-100 rounded"
              />
            </div>
            <div className="col-lg-7 d-flex flex-column justify-content-around align-items-baseline">
              <div className="vision-mission-box">
                <h3>Our vision</h3>
                <p>
                  The Rev. George Mathen Medical Mission seeks to be a centre of
                  healing; witnessing to the abundant life revealed through
                  Jesus Christ Mission.
                </p>
              </div>
              <div className="vision-mission-box">
                <h3>our mission</h3>
                <p>
                  The Objective of the Rev. George Matthen Medical Mission
                  Hospital is to provide health care in rural settings including
                  care outside the premises such as providing care at home,
                  community clinics, medical camps and organize educational and
                  counseling program for youth, children and laborers on
                  preventive- health, hygiene, alcoholism, drug abuse,
                  life-style hazards etc ; that nurtures health and wholeness of
                  men and women as individuals and communities, with special
                  concern for the disadvantaged, marginalized and the
                  vulnerable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
