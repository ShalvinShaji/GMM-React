import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Topbar from "./Topbar";

const Header = () => {
  return (
    <>
      <Topbar />
      <header className="header navbar-area">
        {/* Start Header Middle */}
        <div className="header-middle">
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="col-9 col-lg-7 col-xl-4 ">
                {/* Start Header Logo */}
                <Link to="/" className="navbar-logo d-flex align-items-center">
                  <img
                    src="https://gmmhospital.in/assets/img/logo.jpg"
                    alt=""
                  />
                  <div className="gmm-hospital">
                    <h1 className="text-uppercase hospital-name">
                      Rev. George Mathen
                    </h1>
                    <h2 className="text-uppercase text-start">
                      Medical Mission Hospital
                    </h2>
                    {/* <h4>Mallappally East, Kerala, India</h4> */}
                  </div>
                </Link>
                {/* End Header Logo */}
              </div>
              <div className="col-3 col-lg-5 col-xl-8  row align-items-center justify-content-xl-end">
                <div className="nav-inner">
                  {/* Start Navbar */}
                  <Navbar />
                  {/* End Navbar */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Header Middle */}
      </header>
    </>
  );
};

export default Header;
