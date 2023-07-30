import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

export default function Footer() {
  const handleDepartmentClick = (department) => {
    localStorage.setItem("selectedDepartment", department);
  };
  return (
    <>
      <div className="footer d-flex align-items-center">
        <div className="container ">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact d-flex flex-column align-items-lg-start ">
              {/* <div className="">
                <img
                  src="https://heronavbar.netlify.app/assets/img/logo.jpg"
                  alt=""
                  srcset=""
                  className="me-lg-2 mt-lg-1 mb-3"
                />
              </div> */}
              <div className=" d-flex flex-column ">
                <h3 className="text-uppercase ">
                  Rev. George Mathen <br /> Medical Mission Hospital
                </h3>
                <p className="hospital-contact">
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
            <div className="col-lg-3 col-md-6 footer-links d-flex flex-column align-items-lg-center">
              <ul>
                <h4 className="text-uppercase ">Useful Links</h4>
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
            <div className="col-lg-3 col-md-6 footer-links d-flex flex-column align-items-lg-center">
              <ul>
              <h4 className="text-uppercase ">Our Departments</h4>
                <li>
                  <i className="bx bx-chevrons-right"></i>{" "}
                  <Link
                    to="/departments"
                    onClick={() => handleDepartmentClick("tab-1")}
                    className="text-uppercase"
                  >
                    General Medicine
                  </Link>
                </li>
                <li>
                  <i className="bx bx-chevrons-right"></i>{" "}
                  <Link
                    to="/departments"
                    onClick={() => handleDepartmentClick("tab-2")}
                    className="text-uppercase"
                  >
                    Cardiology
                  </Link>
                </li>
                <li>
                  <i className="bx bx-chevrons-right"></i>{" "}
                  <Link
                    to="/departments"
                    onClick={() => handleDepartmentClick("tab-4")}
                    className="text-uppercase"
                  >
                    Orthopedics
                  </Link>
                </li>
                <li>
                  <i className="bx bx-chevrons-right"></i>{" "}
                  <Link
                    to="/departments"
                    onClick={() => handleDepartmentClick("tab-3")}
                    className="text-uppercase"
                  >
                    Pediatrics
                  </Link>
                </li>
                <li>
                  <i className="bx bx-chevrons-right"></i>{" "}
                  <Link
                    to="/departments"
                    onClick={() => handleDepartmentClick("tab-5")}
                    className="text-uppercase"
                  >
                    Nephrology
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 footer-newsletter d-flex flex-column align-items-lg-start ">
              <h4 className="text-uppercase mb-2">Follow us on:</h4>
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
      <div className="footer-credits d-flex flex-column flex-lg-row">
        <div className="col-lg-6 copyright d-flex justify-content-center"><small>&copy; Copyright <strong><span>gmmhospital</span></strong>. All Rights Reserved</small></div>
        <div className="col-lg-6 credits d-flex justify-content-center"><small> Designed by <a href="#">AZAIC TECH LLP</a> </small></div>
      </div>
    </>
  );
}
