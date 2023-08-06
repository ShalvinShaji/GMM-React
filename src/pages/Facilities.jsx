import React from "react";
import Bcrumbs from "../components/Bcrumbs";
import Sectionhead from "../components/Sectionhead";
import "../css/Facilities.css";

export default function Facilities() {
  return (
    <>
      <Bcrumbs breadcrumbspage="Facilities" />
      <section className="Governingboard" id="Governingboard">
        <Sectionhead sectionname="Our Facilities" />
        <div className="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="facility">
                <div class="facility-img">
                  <img src="./assets/img/facilities/casualty.png" alt="" />
                </div>
                <div class="facility-name">
                  <h3 class="text-uppercase">casualty</h3>
                </div>               
              </div>
            </div>
            <div class="col-lg-3">
              <div class="facility">
                <div class="facility-img">
                  <img src="./assets/img/facilities/casualty.png" alt="" />
                </div>
                <div class="facility-name">
                  <h3 class="text-uppercase">casualty</h3>
                </div>               
              </div>
            </div>
            <div class="col-lg-3">
              <div class="facility">
                <div class="facility-img">
                  <img src="./assets/img/facilities/casualty.png" alt="" />
                </div>
                <div class="facility-name">
                  <h3 class="text-uppercase">casualty</h3>
                </div>               
              </div>
            </div>
            <div class="col-lg-3">
              <div class="facility">
                <div class="facility-img">
                  <img src="./assets/img/facilities/casualty.png" alt="" />
                </div>
                <div class="facility-name">
                  <h3 class="text-uppercase">casualty</h3>
                </div>               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
