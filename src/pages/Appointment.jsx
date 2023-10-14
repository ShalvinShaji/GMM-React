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

  const departmentsData = [
    {
      name: "Cardiology",
      doctors: ["Manu", "Vinu"],
    },
    {
      name: "Nephrology",
      doctors: ["Kiran", "Devi"],
    },
    {
      name: "Orthopedics",
      doctors: ["Joseph"],
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the selected department changes, reset the doctor field
    if (name === "department") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        doctor: "",
        [name]: value,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
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
                  {departmentsData.map((department) => (
                    <option key={department.name} value={department.name}>
                      {department.name}
                    </option>
                  ))}
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
                  {formData.department &&
                    departmentsData
                      .find((dept) => dept.name === formData.department)
                      .doctors.map((doctor) => (
                        <option key={doctor} value={doctor}>
                          {doctor}
                        </option>
                      ))}
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
