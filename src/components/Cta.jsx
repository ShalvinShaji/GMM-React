import React from "react";
import "../css/Cta.css";
import { Link } from "react-router-dom";

export default function Cta() {
  return (
    <section id="cta" className="cta-section">
      <div className="cta col d-flex align-items-center justify-content-center">
        <Link to="/Appointment" className="cta-appointment text-center">
          Make an appointment
        </Link>
      </div>
    </section>
  );
}
