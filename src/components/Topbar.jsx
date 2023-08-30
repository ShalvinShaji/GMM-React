import React from "react";
import "../css/Topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <>
      <div className="topbar  d-flex justify-content-around align-items-center">
        <div className="hospital-contact d-flex">
          <div className="emergency-contact d-none d-lg-block">
            <i className="bx bx-phone "></i>
            <span className="me-2">0469-2782262</span>
          </div>
          <div className="hospital-email">
            <i className="bx bx-envelope "></i>
            <span className="me-2"> gmmhospital@gmail.com</span>
          </div>
          <div className="make-appointment border-end-0">
            <i className="bx bxs-calendar-check"></i>
            <Link
              to="/Appointment"
              className="cta-appointment text-center me-2"
            >
              <span>Book an appointment</span>
            </Link>
          </div>
        </div>
        <div className="hospital-social d-none d-md-block">
          <i className="bx bxl-instagram"></i>
          <i className="bx bxl-facebook"></i>
        </div>
      </div>
    </>
  );
}
