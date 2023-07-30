import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "./pages/Home";
import Department from "./pages/Department";
import Facilities from "./pages/Facilities";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import Appointment from "./pages/Appointment";
import Gallery from "./pages/Gallery";
import Governingboard from "./pages/Governingboard";
import Revgeorgemathen from "./pages/Revgeorgemathen";
import Visionmission from "./pages/Visionmission";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Departments" element={<Department />} />
        <Route path="/Facilities" element={<Facilities/>} />
        <Route path="/Careers" element={<Careers/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Doctors" element={<Doctors/>} />
        <Route path="/Appointment" element={<Appointment/>} />
        <Route path="/Gallery" element={<Gallery/>} />
        <Route path="/Governing-Board" element={<Governingboard/>} />
        <Route path="/Rev-George-Mathen" element={<Revgeorgemathen/>} />
        <Route path="/Vision-Mission" element={<Visionmission />} />
      </Routes>
    </>
  );
};

export default App;
