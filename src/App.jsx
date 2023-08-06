import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
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
import Footer from "./components/Footer";
import Header from "./components/Header";
import Scrolltop from "./components/Scrolltop";
import Chatbot from "./components/Chatbot";
import Backtotop from "./components/Backtotop";


const App = () => {
  return (
    <>
      <Scrolltop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Departments" element={<Department />} />
        <Route path="/Facilities" element={<Facilities />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Doctors" element={<Doctors />} />
        <Route path="/Appointment" element={<Appointment />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Governing-Board" element={<Governingboard />} />
        <Route path="/Rev-George-Mathen" element={<Revgeorgemathen />} />
        <Route path="/Vision-Mission" element={<Visionmission />} />
      </Routes>
      <Chatbot/>
      <Backtotop/>
      <Footer />
    </>
  );
};

export default App;
