import React from "react";
import Bcrumbs from "../components/Bcrumbs";
import Sectionhead from "../components/Sectionhead";
import "../css/Contact.css";

export default function Contact() {
  return (
    <>
      <Bcrumbs breadcrumbspage="Contact" />
      <section className="Contact" id="Contact">
        <Sectionhead sectionname="Contact" />
        <div className="container">
          <iframe
            width="100%"
            height="350px"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.7230635742662!2d76.66237751457722!3d9.445665893232569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b063aeab5b8f6c7%3A0xd86be7f44dd2b9c8!2sRev.%20George%20Mathen%20Mission%20Hospital%2C%20Mallappally!5e0!3m2!1sen!2sin!4v1677327044996!5m2!1sen!2sin"
          ></iframe>
          <div class="row mt-5">
            <div class="col-lg-4">
              <div class="info">
                <div class="address">
                  <i class="bx bx-current-location"></i>
                  <h4>Location:</h4>
                  <p>Mallappally East, P O, Pathanamthitta, Kerala</p>
                </div>

                <div class="email">
                  <i class="bx bx-envelope "></i>
                  <h4>Email:</h4>
                  <p>gmmhospital@gmail.com</p>
                </div>

                <div class="phone">
                  <i class="bx bx-phone"></i>
                  <h4>Call:</h4>
                  <p> 0469-2782262, 8281161330</p>
                </div>
              </div>
            </div>

            <div class="col-lg-8 feedback  mt-lg-0">
              <h4 class=" my-5 my-lg-3">Share your feedback with us:</h4>

              <form
                action="forms/contact.php"
                method="post"
                role="form"
                class="php-email-form"
              >
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>

                <div class="form-group mt-3">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div class="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
