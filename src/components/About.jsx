import React from "react";
import "../css/About.css";
import Sectionhead from "./Sectionhead";

export default function About({ firstPic }) {
  return (
    <>
      <section className="about" id="about">
        <Sectionhead
          sectionname="About"
          sectiondescription="know about"
          sectiondescriptionbold="ourself"
        />
        <div className="container ">
          <div className="row">
            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-start">
              <div className="position-relative pb-3">
                <h1 className="mb-0 ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nisi.
                </h1>
              </div>
              <p className="mb-4 about-desciption">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                vitae odit voluptas architecto, maiores beatae doloremque nisi.
                Non maiores odio unde fugit quae tenetur minus ad, molestias
                ipsum. Perspiciatis eos nobis ab porro impedit iusto assumenda
                veritatis, quaerat, laboriosam dignissimos maiores voluptates
                repellendus nam magnam libero obcaecati sint non dolore.
                Molestias voluptatibus consequatur modi commodi magni neque sint
                ab repudiandae ullam. Enim sapiente recusandae perferendis
                expedita quos neque alias voluptate autem provident.
              </p>
            </div>

            {firstPic && (
              <div className="col-lg-5">
                <div className="position-relative about-img">
                  <img
                    src={firstPic}
                    className="d-block w-100"
                    alt="First Unsplash image"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
