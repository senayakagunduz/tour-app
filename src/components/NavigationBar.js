import React, { useEffect } from "react";
import { useRef, useState } from "react";
import "../navigationBar.css";
import { social, links } from "./datas.js";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";

const NavigationBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect();
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)} //check the value and set the opposite.
          >
            <FaBars />
          </button>
        </div>

        <div className="links-container">
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
