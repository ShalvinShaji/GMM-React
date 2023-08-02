import React, { useEffect, useState } from "react";
import Bcrumbs from "../components/Bcrumbs";
import '../css/Departments.css'

export default function Department() {
  
  const [activeTab, setActiveTab] = useState("tab-1"); // Default to the first tab (you can set any default tab)

  useEffect(() => {
    // Get the selected department from localStorage
    const selectedDepartment = localStorage.getItem("selectedDepartment");

    if (selectedDepartment) {
      // Handle the selected department and set the active tab
      handleTabSwitch(selectedDepartment);
      clearLocal();
    }
  }, []);

  function handleTabSwitch(tabId) {
    // Set the active tab based on the selected department
    setActiveTab(tabId);
  }


  function clearLocal(){
    localStorage.removeItem("selectedDepartment");
  }

  


  return (
    <>
      <Bcrumbs breadcrumbspage="Departments" />
      <section id="departments" className="departments">
        <div className="container">
          <div className="section-title">
            <h2>Our Departments</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 mb-5 mb-lg-0">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <h5 className=" text-center fw-bold">Our Departments</h5>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeTab === "tab-1" ? "active" : ""
                    }`}
                    data-bs-toggle="tab"
                    href="#tab-1"
                    onClick={() => handleTabSwitch("tab-1")}
                  >
                    <p>General Medicine</p>
                  </a>
                </li>
                <li className="nav-item mt-2">
                  <a
                    className={`nav-link ${
                      activeTab === "tab-2" ? "active" : ""
                    }`}
                    data-bs-toggle="tab"
                    href="#tab-2"
                    onClick={() => handleTabSwitch("tab-2")}
                  >
                    <p>Cardiology</p>
                  </a>
                </li>
                <li className="nav-item mt-2">
                 
                  <a
                    className={`nav-link ${
                      activeTab === "tab-3" ? "active" : ""
                    }`}
                    data-bs-toggle="tab"
                    href="#tab-3"
                    onClick={() => handleTabSwitch("tab-3")}
                  >
                    <p>Pediatrics</p>
                  </a>
                </li>
                <li className="nav-item mt-2">
                  
                  <a
                    className={`nav-link ${
                      activeTab === "tab-4" ? "active" : ""
                    }`}
                    data-bs-toggle="tab"
                    href="#tab-4"
                    onClick={() => handleTabSwitch("tab-4")}
                  >
                    <p>Orthopedics</p>
                  </a>
                </li>
                <li className="nav-item mt-2">
                  
                  <a
                    className={`nav-link ${
                      activeTab === "tab-5" ? "active" : ""
                    }`}
                    data-bs-toggle="tab"
                    href="#tab-5"
                    onClick={() => handleTabSwitch("tab-5")}
                  >
                    <p>Nephrology</p>
                  </a>
                </li>
                <li className="nav-item mt-2">
                 
                  <a
                    className={`nav-link ${
                      activeTab === "tab-6" ? "active" : ""
                    }`}
                    data-bs-toggle="tab"
                    href="#tab-6"
                    onClick={() => handleTabSwitch("tab-6")}
                  >
                    <p>ENT</p>
                  </a>
                </li>
                <li className="nav-item mt-2">
                  <a
                    className={`nav-link ${
                      activeTab === "tab-7" ? "active" : ""
                    }`}
                    data-bs-toggle="tab"
                    href="#tab-7"
                    onClick={() => handleTabSwitch("tab-7")}
                  >
                    <p>Emergency Medicine</p>
                  </a>
                </li>
                <li className="nav-item mt-2">
                  <a
                    className={`nav-link ${
                      activeTab === "tab-8" ? "active" : ""
                    }`}
                    data-bs-toggle="tab"
                    href="#tab-8"
                    onClick={() => handleTabSwitch("tab-8")}
                  >
                    <p>Home care service & Palliative Care</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="tab-content">
                <div className={`tab-pane ${activeTab === 'tab-1' ? 'active show' : ''}`} id="tab-1">
                  <div className="department-img">
                    <img
                      src="assets/img/departments/general-medicine-banner.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="department-heading my-4">
                    <h3>general medicine</h3>
                  </div>

                  <div className="department-description mb-4">
                    <p>
                      The department of general medicine deals with the
                      prevention, diagnosis, and treatment of adult diseases.
                      With experienced doctors in the field the department
                      provides the best possible primary care.
                    </p>
                  </div>

                  <div className="row d-flex  align-items-center justify-content-lg-start mx-auto">
                    <div className="doc col-md-5 ">
                      <div className="pic">
                        <img
                          src="assets/img/doctors/no-image.jpg"
                          className="img-fluid mb-3"
                          alt=""
                        />
                      </div>
                      <div className="doc-info text-center d-flex flex-column  align-items-center justify-content-center">
                        <h4>Dr N Damodaran</h4>
                        <h4>(MBBS, MD)</h4>
                        <span>Chief Physician</span>
                        <p>OP Timings: Monday- Saturday</p>
                        <p>6.00 PM- 9.00 PM</p>
                      </div>
                    </div>
                    <div className="doc col-md-5 ">
                      <div className="pic">
                        <img
                          src="assets/img/doctors/DrKaChacko.jpg"
                          className="img-fluid mb-3"
                          alt=""
                        />
                      </div>
                      <div className="doc-info text-center d-flex flex-column  align-items-center justify-content-center">
                        <h4>Dr K. A Chacko</h4>
                        <h4>(MBBS, FCAMS)</h4>
                        <span>Physician</span>
                        <p>OP Timings: Monday, Wednesday, Friday</p>
                        <p>9AM- 12.30PM</p>
                      </div>
                    </div>
                    <div className="doc col-md-5 ">
                      <div className="pic">
                        <img
                          src="assets/img/doctors/DrBinoyGRussel.jpg"
                          className="img-fluid mb-3"
                          alt=""
                        />
                      </div>
                      <div className="doc-info text-center d-flex flex-column  align-items-center justify-content-center">
                        <h4>Dr Binoy G Russel</h4>
                        <h4>(MBBS, FCAMS)</h4>
                        <span>Physician</span>
                        <p>OP Timings: Tuesday, Thursday</p>
                        <p>10AM- 1.00PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`tab-pane ${activeTab === 'tab-2' ? 'active show' : ''}`} id="tab-2">
                  <div className="department-img">
                    <img
                      src="assets/img/departments/cardiology-banner.jpeg.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="department-heading my-4">
                    <h3>Cardiology</h3>
                  </div>

                  <div className="department-description mb-4">
                    <p>
                      The department of cardiology diagonizes and provides
                      treatment for disorders related to heart and
                      cardiovascular system. We provide OPD based care for our
                      patients.
                    </p>
                  </div>

                  <div className="row d-flex  align-items-center mx-auto">
                    <div className="doc col-md-5 ">
                      <div className="pic">
                        <img
                          src="assets/img/doctors/DrPhiliposejohn.jpeg"
                          className="img-fluid mb-3"
                          alt=""
                        />
                      </div>
                      <div className="doc-info text-center d-flex flex-column  align-items-center justify-content-center">
                        <h4>Dr Philipose John</h4>
                        <h4>(MBBS, MD, DM)</h4>
                        <span>Cardiologist</span>
                        <p>OP Timings: Saturday</p>
                        <p>12.00PM – 1.00PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`tab-pane ${activeTab === 'tab-3' ? 'active show' : ''}`} id="tab-3">
                  <div className="department-img">
                    <img
                      src="assets/img/departments/pediatrics-banner.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="department-heading my-4">
                    <h3>Pediatrics</h3>
                  </div>

                  <div className="department-description mb-4">
                    <p>
                      The department provides medical care to the infants,
                      children, adolescents, and young adults. We provide
                      outpatient sevices as well as inapatient service which
                      includes:-{" "}
                    </p>
                    <ul>
                      <li>Assessment of all Paediatric cases</li>
                      <li>Vaccinations</li>
                    </ul>
                  </div>

                  <div className="row d-flex  align-items-center mx-auto">
                    <div className="doc col-md-5 ">
                      <div className="pic">
                        <img
                          src="assets/img/doctors/DrSunnychenDevasia.jpg"
                          className="img-fluid mb-3"
                          alt=""
                        />
                      </div>
                      <div className="doc-info text-center d-flex flex-column  align-items-center justify-content-center">
                        <h4>Dr Sunnychen Devasia</h4>
                        <h4>(MBBS, DCH)</h4>
                        <span>Pediatrician</span>
                        <p>OP Timings: Monday- Saturday</p>
                        <p>11.30 AM- 1.00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`tab-pane ${activeTab === 'tab-4' ? 'active show' : ''}`} id="tab-4">
                  <div className="department-img">
                    <img
                      src="assets/img/departments/orthopedic-banner.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="department-heading my-4">
                    <h3>orthopedics</h3>
                  </div>
                  <div className="department-description mb-4">
                    <p>
                      Provide medical care to issues related to musculoskeletal
                      system and treating injuries to bones, joints, ligaments,
                      or tendons.
                    </p>
                    <p>We also have well equipped physiotherapy unit.</p>
                  </div>

                  <div className="row d-flex  align-items-center mx-auto">
                    <div className="doc col-md-5 ">
                      <div className="pic">
                        <img
                          src="assets/img/doctors/DrVarkeySKulangara.jpg"
                          className="img-fluid mb-3"
                          alt=""
                        />
                      </div>
                      <div className="doc-info text-center d-flex flex-column  align-items-center justify-content-center">
                        <h4>Dr Varkey S Kulangara </h4>
                        <h4>(MBBS, MS, DNB, MRCS)</h4>
                        <span>Orthopedic Surgeon</span>
                        <p>OP Timings: Monday, Tuesday, Thursday</p>
                        <p>5.30PM- 8.00PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`tab-pane ${activeTab === 'tab-5' ? 'active show' : ''}`} id="tab-5">
                  <div className="department-img">
                    <img
                      src="assets/img/departments/nephrology-banner.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="department-heading my-4">
                    <h3>Nephrology</h3>
                  </div>

                  <div className="department-description mb-4">
                    <p>
                      Provides OPD based medical to diseases related to kidney.
                    </p>
                    <p className="text-capitalize">services:</p>
                    <h6 className="fw-bold">Dialysis unit</h6>
                    <p>
                      Dialysis is a treatment for kidney failure that rids your
                      body of unwanted toxins, waste products and excess fluids
                      by filtering your blood. When kidneys fail, your body may
                      have difficulty cleaning your blood and keeping your
                      system chemically balanced. Dialysis can take the place of
                      some kidney function and, along with medication and proper
                      care, help you live longer.
                    </p>
                    <p>
                      Dialysis department started its functioning from 2019 with
                      generous contribution from Rajeev Gandhi Goodwill
                      Charitable Trusr, led by P. J Kurian, Former Deputy
                      Chairman of the Rajya Sabha. We have been able to provide
                      dialsysis treatement to the poor and needy in the society
                      at an affordable rate. Currently we have 2 dialsysis
                      machines. On an average we have been able to provide 50
                      dialysis free per month.{" "}
                    </p>
                    <p>
                      You can be part of this project and provide a helping hand
                      through your generous contributions.
                    </p>
                    <h6 className="fw-bold">Timing</h6>
                    <p>Monday - Saturday</p>
                    <p>7.00AM – 4.00 PM</p>
                    <h6 className="fw-bold">Dialysis Technicians </h6>
                    <ul>
                      <li>Harikrishnan. S, MSc Dialysis Therapy</li>
                      <li>Jishnu Baburaj Diploma in Dialysis Technology</li>
                    </ul>
                  </div>

                  <div className="row d-flex  align-items-center mx-auto">
                    <div className="doc col-md-5 ">
                      <div className="pic">
                        <img
                          src="assets/img/doctors/DrSnehaAnnaJoy.jpeg"
                          className="img-fluid mb-3"
                          alt=""
                        />
                      </div>
                      <div className="doc-info text-center d-flex flex-column  align-items-center justify-content-center">
                        <h4>Dr Sneha Anna Joy</h4>
                        <h4>(MBBS, MD, DM)</h4>
                        <span>Consultant Nephrologist</span>
                        <p>OP Timings: 1st & 3rd Saturday</p>
                        <p>11.00 AM- 12.00PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`tab-pane ${activeTab === 'tab-6' ? 'active show' : ''}`} id="tab-6">
                  <div className="department-img">
                    <img
                      src="assets/img/departments/ent-banner.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="department-heading my-4">
                    <h3>ENT</h3>
                  </div>

                  <div className="department-description mb-4">
                    <p>
                      Medical specialty which provides treatment to diseases
                      related to Ear, Nose, and Throat. We provide OPD based
                      care.
                    </p>
                    <p className="text-capitalize">services:</p>
                    <ul>
                      <li>Ear washing</li>
                      <li>Ear suctioning</li>
                      <li>Vertigo Clinic</li>
                    </ul>
                  </div>

                  <div className="row d-flex  align-items-center mx-auto">
                    <div className="doc col-md-5 ">
                      <div className="pic">
                        <img
                          src="assets/img/doctors/DrKiranBabu.jpg"
                          className="img-fluid mb-3"
                          alt=""
                        />
                      </div>
                      <div className="doc-info text-center d-flex flex-column  align-items-center justify-content-center">
                        <h4>Dr Kiran Babu </h4>
                        <h4>(MBBS, MS)</h4>
                        <span>ENT Surgeon</span>
                        <p>OP Timings: Tuesday, Friday</p>
                        <p>4.00PM- 6.00PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`tab-pane ${activeTab === 'tab-7' ? 'active show' : ''}`} id="tab-7">
                  <div className="department-img">
                    <img
                      src="assets/img/departments/emergency-medicine-banner.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="department-heading my-4">
                    <h3>Emergency Medicine</h3>
                  </div>

                  <div className="department-description mb-4">
                    <p>
                      We provide 24*7 emergency care to patients who need
                      immediate care.
                    </p>
                  </div>

                  <div className="row d-flex  align-items-center mx-auto">
                    <div className="doc col-md-5 ">
                      <div className="pic">
                        <img
                          src="assets/img/doctors/DrRohanChackoJacob.jpg"
                          className="img-fluid mb-3"
                          alt=""
                        />
                      </div>
                      <div className="doc-info text-center d-flex flex-column  align-items-center justify-content-center">
                        <h4>Dr Rohan Chacko Jacob</h4>
                        <h4>(MBBS)</h4>
                        <span>Casualty Medical Officer</span>
                      </div>
                    </div>
                    <div className="doc col-md-5 ">
                      <div className="pic">
                        <img
                          src="assets/img/doctors/DrSaraJacob.jpg"
                          className="img-fluid mb-3"
                          alt=""
                        />
                      </div>
                      <div className="doc-info text-center d-flex flex-column  align-items-center justify-content-center">
                        <h4>Dr Sara Jacob </h4>
                        <h4>(MBBS)</h4>
                        <span>Casualty Medical Officer</span>
                      </div>
                    </div>
                    <div className="doc col-md-5 ">
                      <div className="pic">
                        <img
                          src="assets/img/doctors/no-image.jpg"
                          className="img-fluid mb-3"
                          alt=""
                        />
                      </div>
                      <div className="doc-info text-center d-flex flex-column  align-items-center justify-content-center">
                        <h4>Dr Midhun Raj </h4>
                        <h4>(MBBS)</h4>
                        <span>General Practitioner</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`tab-pane ${activeTab === 'tab-8' ? 'active show' : ''}`} id="tab-8">
                  <div className="department-img">
                    <img
                      src="assets/img/departments/palliative-banner.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="department-heading my-4">
                    <h3>Home care service & Palliative Care</h3>
                  </div>

                  <div className="department-description mb-4">
                    <h6 className="fw-bold">Home care</h6>
                    <p>
                      Based on a survey of the nearby community GMM has started
                      Home Care Health Mission in 2014. A team of one Doctor,
                      one nurse, one paramedical staff and a counselor visit the
                      houses of bedridden patients and others who cannot
                      normally go to a hospital, and give medical care and
                      support, with the help of a mobile clinic. Serious
                      patients are referred to hospitals for further
                      investigation and treatment.
                    </p>
                    <h6 className="fw-bold">
                      Services we render on home visits:
                    </h6>
                    <ul>
                      <li>Blood collection for lab testing</li>
                      <li>Folly’s catheterization </li>
                      <li>Ryle’s tube insertion </li>
                      <li>Colostomy care</li>
                      <li>
                        IV fluid administration for patients as per doctor’s
                        advice
                      </li>
                      <li>Follow up for palliative patients</li>
                      <li>Health care education for parents and relatives </li>
                      <li>Demonstration of Ryle’s tube feed</li>
                      <li>Catheter care </li>
                      <li>Physiotherapy</li>
                    </ul>
                    <h6 className="fw-bold">Palliative Care</h6>
                    <p>
                      <i>“Do not count the days, make the days count”</i>
                    </p>
                    <p>
                      Elderly patients with multiple medical issues almost
                      confined to bed and are need constant medical attention,
                      take long time refuge in the hospital, and in most cases
                      reach their lives’ end while being here. Even when the
                      family is unable to bear the expenses such as medical
                      care, medications, room rent and the like for many months,
                      the hospital continues to render services to them.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
