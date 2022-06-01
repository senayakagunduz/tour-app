import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { links, social } from "./datas";

export default function Footer() {
  return (
    <>
      <div className="b-example-divider"></div>
      <div className="footer-expand-lg">
        <footer className="d-flex-fluid shadow-p3 justfy-content-between align-item-center py-3 my-4 border-top align-buttom bg-info">
          <ul className="social-icons nav col-md-4 justfiy-content-end list-unstyled d-flex">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
            {/* <li className="ms-3">
              <a href="https:/twitter.com" target={"_blank"}>
                <FaTwitter />
              </a>
            </li>
            <li className="ms-3">
              <a href="https:/www.facebook.com" target={"_blank"}>
                <FaFacebook />
              </a>
            </li>
            <li className="ms-3">
              <a href="https://www.instagram.com" target={"_blank"}>
                <FaInstagram />
              </a>
            </li>
            <li className="ms-3">
              <a href="https://github.com/" target={"_blank"}>
                <FaGithub />
              </a>
            </li>
            <li className="ms-3">
              <a href="https:/www.gmail.com" target={"_blank"}>
                <SiGmail />
              </a>
            </li> */}
          </ul>
        </footer>
      </div>
    </>
  );
}
