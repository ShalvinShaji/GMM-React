import React from "react";
import "../css/About.css";
import Sectionhead from "./Sectionhead";

export default function About({ aboutData }) {
  const { aboutBanner, aboutHead, aboutDesc } = aboutData;

  function aboutSectionData() {
    return (
      <div className="row">
        <div className="col-lg-7 d-flex flex-column justify-content-center align-items-start">
          <div className="position-relative pb-3">
            <h1 className="mb-0 ">{aboutHead}</h1>
          </div>
          <p className="mb-4 about-desciption">{aboutDesc}</p>
        </div>

        {aboutBanner && (
          <div className="col-lg-5">
            <div className="position-relative about-img">
              <img src={aboutBanner} className="d-block w-100" alt="About" />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <section className="about" id="about">
        <Sectionhead
          sectionname="About"
          sectiondescription="know about"
          sectiondescriptionbold="ourself"
        />
        <div className="container">{aboutSectionData()}</div>
      </section>
    </>
  );
}
