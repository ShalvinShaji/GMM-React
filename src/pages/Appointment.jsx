import React, { useState } from "react";
import Bcrumbs from "../components/Bcrumbs";
import Sectionhead from "../components/Sectionhead";
import "../css/Appointment.css";

function Appointment() {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    date: "",
    department: "",
    doctor: "",
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
    // Here you can handle the form submission, for example:
    console.log(formData);
    // Clear the form fields after submission
    setFormData(initialFormData);
  };

  return (
    <>
      <Bcrumbs breadcrumbspage="Appointment" />
      <section className="appointment" id="appointment">
        <Sectionhead
          sectionname="Appointment"
          sectiondescription="Make an "
          sectiondescriptionbold="Appointment"
        />
        <div className="container">
          <form
            onSubmit={handleSubmit}
            method="post"
            role="form"
            className="email-form"
          >
            <div className="row">
              <div className="col-md-4 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <div className="validate"></div>
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <div className="validate"></div>
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <div className="validate"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 form-group mt-3">
                <input
                  type="text"
                  placeholder="Select Date & Time"
                  onFocus={(e) => (e.target.type = "datetime-local")}
                  name="date"
                  className="form-control datepicker"
                  id="date"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
                <div className="validate"></div>
              </div>
              <div className="col-md-4 form-group mt-3">
                <select
                  name="department"
                  id="department"
                  className="form-select"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Department</option>
                  <option value="General medicine" className="text-capitalize">
                    General medicine
                  </option>
                  <option value="Cardiology" className="text-capitalize">
                    Cardiology
                  </option>
                  <option value="Pediatrics" className="text-capitalize">
                    Pediatrics
                  </option>
                  <option value="Orthopedics" className="text-capitalize">
                    Orthopedics
                  </option>
                  <option value="Nephrology" className="text-capitalize">
                    Nephrology
                  </option>
                  <option value="ENT" className="text-capitalize">
                    ENT
                  </option>
                  <option
                    value="Home Care Service and Palliative service"
                    className="text-capitalize"
                  >
                    Home Care Service and Palliative service
                  </option>
                </select>
              </div>
              <div className="col-md-4 form-group mt-3">
                <select
                  name="doctor"
                  id="doctor"
                  className="form-select"
                  value={formData.doctor}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Doctor</option>
                  <option value="Dr K. A Chacko" className="text-capitalize">
                    Dr K. A Chacko
                  </option>
                  <option value="Dr N Damodaran" className="text-capitalize">
                    Dr N Damodaran
                  </option>
                  <option value="Dr Binoy G Russel" className="text-capitalize">
                    Dr Binoy G Russel
                  </option>
                  <option
                    value="Dr Sunnychen Devasia"
                    className="text-capitalize"
                  >
                    Dr Sunnychen Devasia
                  </option>
                  <option
                    value="Dr Varkey S Kulangara"
                    className="text-capitalize"
                  >
                    Dr Varkey S Kulangara
                  </option>
                  <option value="Dr Kiran Babu" className="text-capitalize">
                    Dr Kiran Babu
                  </option>
                  <option value="Dr Sneha Anna Joy" className="text-capitalize">
                    Dr Sneha Anna Joy
                  </option>
                  <option
                    value="Dr Rohan Chacko Jacob"
                    className="text-capitalize"
                  >
                    Dr Rohan Chacko Jacob
                  </option>
                  <option value="Dr Sara Jacob" className="text-capitalize">
                    Dr Sara Jacob
                  </option>
                  <option value="Dr Midhun Raj" className="text-capitalize">
                    Dr Midhun Raj
                  </option>
                </select>
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Make an Appointment</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Appointment;
