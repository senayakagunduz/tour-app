import React from "react";
import { links } from "./datas.js";
import "../navigationBar.css";

const SideBar = () => {
  return (
    <>
      <h4>SideBar</h4>
      <div className="links-container show-container">
        <ul className="links">
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
    </>
  );
};

export default SideBar;
