import React from "react";
import Bcrumbs from "../components/Bcrumbs";
import Sectionhead from "../components/Sectionhead";
import "../css/Facilities.css";

export default function Facilities() {
  return (
    <>
      <Bcrumbs breadcrumbspage="Facilities" />
      <section className="Facilities" id="Facilities">
        <Sectionhead
          sectionname="Facilities"
          sectiondescription="Our"
          sectiondescriptionbold="Facilities"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="facility">
                <div className="facility-img">
                  <img src="./assets/img/facilities/casualty.png" alt="" />
                </div>
                <div className="facility-name">
                  <h3 className="text-uppercase">casualty</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="facility">
                <div className="facility-img">
                  <img src="./assets/img/facilities/casualty.png" alt="" />
                </div>
                <div className="facility-name">
                  <h3 className="text-uppercase">casualty</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="facility">
                <div className="facility-img">
                  <img src="./assets/img/facilities/casualty.png" alt="" />
                </div>
                <div className="facility-name">
                  <h3 className="text-uppercase">casualty</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="facility">
                <div className="facility-img">
                  <img src="./assets/img/facilities/casualty.png" alt="" />
                </div>
                <div className="facility-name">
                  <h3 className="text-uppercase">casualty</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
