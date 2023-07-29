import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="container-fluid" id="footer">
        <div className="footer-top">
          <div className="row footer-content d-flex justify-content-center ">
            <div className="col-lg-3 col-md-6 footer-contact d-flex flex-column flex-lg-row">
              <div className="me-2">
                <img
                  src="https://heronavbar.netlify.app/assets/img/logo.jpg"
                  alt=""
                  srcset=""
                  className="me-lg-2 mt-lg-1 mb-3"
                />
              </div>
              <div>
                <h3 className="text-uppercase ">
                  Rev. George Mathen <br /> Medical Mission Hospital
                </h3>
                <p>
                  Mallappally East, P O<br />
                  Pathanamthitta,&nbsp;Kerala
                  <br />
                  <strong>Phone:</strong> 0469-2782262, 8281161330
                  <br />
                  <strong>Email:</strong> gmmhospital@gmail.com
                  <br />
                </p>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links d-flex flex-column align-items-lg-center">
              <h4 className="text-uppercase ms-lg-2">Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevrons-right"></i>
                  <Link to="/" className="text-uppercase">
                    Home
                  </Link>
                </li>
                <li>
                  <i className="bx bx-chevrons-right"></i>
                  <Link to="/facilities" className="text-uppercase">
                    facilities
                  </Link>
                </li>
                <li>
                  <i className="bx bx-chevrons-right"></i>
                  <Link to="/appointment" className="text-uppercase">
                    Appointment
                  </Link>
                </li>
                <li>
                  <i className="bx bx-chevrons-right"></i>
                  <Link to="/contact" className="text-uppercase">
                    Contact
                  </Link>
                </li>
                <li>
                  <i className="bx bx-chevrons-right"></i>
                  <Link to="/Gallery" className="text-uppercase">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 footer-links d-flex flex-column align-items-lg-center">
              <h4 className="text-uppercase ms-lg-4">Our Departments</h4>
              <ul>
                <li>
                  <i className="bx bx-chevrons-right"></i>{" "}
                  <a href="./departments.html" className="text-uppercase">
                    General medicine
                  </a>
                </li>
                <li>
                  <i className="bx bx-chevrons-right"></i>{" "}
                  <a href="./cardiology.html" className="text-uppercase">
                    Cardiology
                  </a>
                </li>
                <li>
                  <i className="bx bx-chevrons-right"></i>{" "}
                  <a href="./orthopedics.html" className="text-uppercase">
                    Orthopedics
                  </a>
                </li>
                <li>
                  <i className="bx bx-chevrons-right"></i>{" "}
                  <a href="./pediatrics.html" className="text-uppercase">
                    Pediatrics
                  </a>
                </li>
                <li>
                  <i className="bx bx-chevrons-right"></i>{" "}
                  <a href="./nephrology.html" className="text-uppercase">
                    nephrology
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-3 footer-newsletter d-flex flex-column align-items-lg-center">
              <h4 className="text-uppercase">Follow us on:</h4>
              <div className="social-links ">
                <a
                  href="https://www.facebook.com/georgemathen.missionhospital?mibextid=ZbWKwL"
                  className="facebook"
                >
                  <i className="bx bxl-facebook"></i>
                </a>
                <a
                  href="https://instagram.com/gmm_hospital?igshid=YmMyMTA2M2Y="
                  className="instagram"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="#" className="twitter">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
