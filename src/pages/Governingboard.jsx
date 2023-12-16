import React from "react";
import Bcrumbs from "../components/Bcrumbs";
import Sectionhead from "../components/Sectionhead";
import "../css/Governingboard.css";

export default function Governingboard() {
  function governingBoardMembersData() {
    var governingBoardDesc = `The administration is vested with the Rev. George Mathen Medical
                              Mission Charitable Society which is headed by the Vicar of the
                              Holy Immanuel CSI Church as the President and the Bishop of the
                              CSI Madhya Kerala Diocese as the Patron. The health ministry of
                              the Holy Immanuel CSI Church, Mallappally is carried out through
                              this society. The society registration number is A 121/77`;

    var governingBoardMembers = [
      {
        id: 1,
        position: "Patron",
        name: "Rt Rev Dr. Malayil Sabu Koshy Cherian",
      },
      {
        id: 2,
        position: "Patron",
        name: "Rt Rev Dr. Malayil Sabu Koshy Cherian",
      },
      {
        id: 3,
        position: "Patron",
        name: "Rt Rev Dr. Malayil Sabu Koshy Cherian",
      },
      {
        id: 4,
        position: "Patron",
        name: "Rt Rev Dr. Malayil Sabu Koshy Cherian",
      },
      {
        id: 5,
        position: "Patron",
        name: "Rt Rev Dr. Malayil Sabu Koshy Cherian",
      },
    ];
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>{governingBoardDesc}</p>
          </div>
        </div>
        <div className="row my-4">
          {governingBoardMembers.map((member) => (
            <div key={member.id} className="col-md-6 col-lg-4 col-xl-3">
              <div className="member d-flex flex-column align-items-center justify-content-center">
                <div className="member-info text-center">
                  <span>{member.position}</span>
                  <h4>{member.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <Bcrumbs breadcrumbspage="Governing Board" />
      <section className="Governingboard" id="Governingboard">
        <Sectionhead
          sectionname="Governing Board"
          sectiondescription="Our"
          sectiondescriptionbold="Board of directors"
        />
        {governingBoardMembersData()}
      </section>
    </>
  );
}
