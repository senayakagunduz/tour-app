
import React from "react";
import { FaBars } from "react-icons/fa";
import mainlogo from "./logo2.png";
import { IconContext } from "react-icons";

const NavBar = () => {
  return (
    <>
      <section id="nav-bar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#">
            <img src={mainlogo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <IconContext.Provider
              value={{
                color: "#fff",
                fontSize: "30px !important",
                className: "global-class-name",
              }}
            >
              <div>
                <FaBars />
              </div>
            </IconContext.Provider>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
};

export default NavBar;
