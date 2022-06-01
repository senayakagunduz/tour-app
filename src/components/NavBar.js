import React, { useEffect } from "react";
import { useRef, useState } from "react";
import "../index.css";
import { links, social } from "./datas.js";
import { FaBars } from "react-icons/fa";

export default function NavBar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLink = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={require("../images/mylogo.png")} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            className="links-container collapse navbar-collapse  "
            ref={linksContainerRef}
          >
            <ul
              className="links navbar-nav  me-auto mb-3 mb-lg-0"
              ref={linksRef}
            >
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
            {/* <ul className="links navbar-nav  me-auto mb-3 mb-lg-0" ref={linksRef}>
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul> */}
          </div>
        </div>
        <form
          className="d-flex"
          role="search"
          style={{
            width: "36rem",
            alignItems: "center",
          }}
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{
              background: "lightgrey",
              width: "12rem",
            }}
          />
          <button
            className="btn btn-outline-primary"
            type="submit"
            style={{ marginRight: "5rem" }}
          >
            Search
          </button>
        </form>
      </nav>
    </>
  );
}
