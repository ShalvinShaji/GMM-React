import React, { useState } from "react";
import Bcrumbs from "../components/Bcrumbs";
import Sectionhead from "../components/Sectionhead";
import "../css/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    setFormData(initialFormData);
  };

  function contactForm() {
    return (
      <form
        // action="forms/contact.php"
        method="post"
        role="form"
        className="php-email-form"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col-md-6 form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 form-group mt-3 mt-md-0">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group mt-3">
          <textarea
            className="form-control"
            name="message"
            rows="5"
            placeholder="Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="text-center">
          <button type="submit">Send Message</button>
        </div>
      </form>
    );
  }

  return (
    <>
      <Bcrumbs breadcrumbspage="Contact" />
      <section className="Contact" id="Contact">
        <Sectionhead
          sectionname="Contact"
          sectiondescription="Get in Touch"
          sectiondescriptionbold="with us"
        />
        <div className="container">
          <iframe
            width="100%"
            height="350px"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.7230635742662!2d76.66237751457722!3d9.445665893232569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b063aeab5b8f6c7%3A0xd86be7f44dd2b9c8!2sRev.%20George%20Mathen%20Mission%20Hospital%2C%20Mallappally!5e0!3m2!1sen!2sin!4v1677327044996!5m2!1sen!2sin"
          ></iframe>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address d-flex justify-content-start align-items-center ">
                  <FontAwesomeIcon
                    icon={faLocation}
                    className="contact-info-icon"
                  />
                  <div className="d-flex flex-column align-items-start justify-content-center ms-4">
                    <h4>Location:</h4>
                    <p>Mallappally East, P O, Pathanamthitta, Kerala</p>
                  </div>
                </div>

                <div className="email d-flex justify-content-start align-items-center ">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="contact-info-icon"
                  />
                  <div className="d-flex flex-column align-items-start justify-content-center ms-4">
                    <h4>Email:</h4>
                    <p>gmmhospital@gmail.com</p>
                  </div>
                </div>

                <div className="phone d-flex justify-content-start align-items-center ">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="contact-info-icon"
                  />
                  <div className="d-flex flex-column align-items-start justify-content-center ms-4">
                    <h4>Call:</h4>
                    <p> 0469-2782262, 8281161330</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 feedback  mt-lg-0">
              <h4 className=" my-5 my-lg-3">Share your feedback with us:</h4>

              {contactForm()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
