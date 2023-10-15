import React from "react";
import "../css/Topbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Topbar() {
  return (
    <>
      <div className="topbar  d-flex justify-content-around align-items-center">
        <div className="hospital-contact d-flex align-items-center">
          <div className="emergency-contact  d-lg-flex align-items-center d-none d-lg-block">
            <FontAwesomeIcon icon={faPhone} className="topbar-icons" />
            <span className="me-2">0469-2782262</span>
          </div>
          <div className="hospital-email d-flex align-items-center">
            <FontAwesomeIcon icon={faEnvelope} className="topbar-icons" />
            <span className="me-2"> gmmhospital@gmail.com</span>
          </div>
          <div className="make-appointment d-flex align-items-center">
            <FontAwesomeIcon icon={faCalendarAlt} className="topbar-icons" />
            <Link
              to="/Appointment"
              className="cta-appointment text-center me-2"
            >
              <span>Book an appointment</span>
            </Link>
          </div>
        </div>
        <div className="hospital-social d-none d-md-block d-md-flex justify-content-between">
          <FontAwesomeIcon icon={faInstagram} className="topbar-social" />
          <FontAwesomeIcon icon={faFacebook} className="topbar-social" />
        </div>
      </div>
    </>
  );
}
