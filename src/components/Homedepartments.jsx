import React from "react";
import "../css/Homedepartments.css";
import Sectionhead from "./Sectionhead";

export default function Homedepartments() {
  return (
    <section className="departments" id="departments">
      <Sectionhead sectionname="Departments" />
      <div className="container" >
        <div className="row mb-4">
          <div className="col-lg-4 col-md-6 ">
            <div className="icon-box">
              <div className="departments-img">
                <a href="./Departments.html">
                  <img
                    src="./assets/img/departments/general-medicine.png"
                    alt=""
                  />
                </a>
              </div>
              <h4>
                <a href="./Departments.html" className="text-uppercase">
                  General Medicine
                </a>
              </h4>
              <p>
                The department of general medicine deals with the prevention,
                diagnosis, and treatment of adult diseases.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="departments-img">
                <a href="./Departments.html">
                  <img src="./assets/img/departments/cardiology.png" alt="" />
                </a>
              </div>
              <h4>
                <a href="./Departments.html" className="text-uppercase">
                  Cardiology
                </a>
              </h4>
              <p>
                The department of cardiology diagonizes and provides treatment
                for disorders related to heart and cardiovascular system.
              </p>
              <div className="col d-flex align-items-center justify-content-center "></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="departments-img">
                <a href="./Departments.html">
                  <img src="./assets/img/departments/pediatrics.png" alt="" />
                </a>
              </div>
              <h4>
                <a href="./Departments.html" className="text-uppercase">
                  Pediatrics
                </a>
              </h4>
              <p>
                The department provides medical care to the infants, children,
                adolescents, and young adults.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch d-none d-md-block">
            <div className="icon-box">
              <div className="departments-img">
                <a href="./Departments.html">
                  <img src="./assets/img/departments/orthopedics.png" alt="" />
                </a>
              </div>
              <h4>
                <a href="./Departments.html" className="text-uppercase">
                  Orthopedics
                </a>
              </h4>
              <p>
                Provide medical care to issues related to musculoskeletal system
                and treating injuries to bones, joints, ligaments, or tendons.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch d-none d-lg-block">
            <div className="icon-box">
              <div className="departments-img">
                <a href="./Departments.html">
                  <img src="./assets/img/departments/nephrology.png" alt="" />
                </a>
              </div>
              <h4>
                <a href="./Departments.html" className="text-uppercase">
                  nephrology
                </a>
              </h4>
              <p>Provides OPD based medical to diseases related to kidney.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch d-none d-lg-block">
            <div className="icon-box">
              <div className="departments-img">
                <a href="./Departments.html">
                  <img src="./assets/img/departments/ent.png" alt="" />
                </a>
              </div>
              <h4>
                <a href="Departments.html" className="text-uppercase">
                  ENT
                </a>
              </h4>
              <p>
                Medical specialty which provides treatment to diseases related
                to Ear, Nose, and Throat. We provide OPD based care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
