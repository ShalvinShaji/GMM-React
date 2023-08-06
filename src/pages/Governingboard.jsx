import React from "react";
import Bcrumbs from "../components/Bcrumbs";
import Sectionhead from "../components/Sectionhead";
import "../css/Governingboard.css";

export default function Governingboard() {
  return (
    <>
      <Bcrumbs breadcrumbspage="Governing Board" />
      <section className="Governingboard" id="Governingboard">
        <Sectionhead sectionname="Governing Board" />
        <div className="container">
          <div class="row">
            <div class="col">
              <p>
                The administration is vested with the Rev. George Mathen Medical
                Mission Charitable Society which is headed by the Vicar of the
                Holy Immanuel CSI Church as the President and the Bishop of the
                CSI Madhya Kerala Diocese as the Patron. The health ministry of
                the Holy Immanuel CSI Church, Mallappally is carried out through
                this society. The society registration number is A 121/77
              </p>
            </div>
          </div>
          <div class="row my-4">
            <div class="col-md-6 col-lg-4 col-xl-3 ">
              <div class="member d-flex flex-column align-items-center justify-content-center">
                <div class="member-info text-center">
                  <span>Patron</span>
                  <h4>Rt Rev Dr. Malayil Sabu Koshy Cherian</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
