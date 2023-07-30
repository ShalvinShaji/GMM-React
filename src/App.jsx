import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "./components/Home";
import Department from "./components/Department";
import Facilities from "./components/Facilities";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Doctors from "./components/Doctors";
import Appointment from "./components/Appointment";
import Gallery from "./Gallery";
import Governingboard from "./components/Governingboard";

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
      </Routes>
    </>
  );
};

export default App;
