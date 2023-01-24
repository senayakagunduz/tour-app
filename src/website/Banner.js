import React from "react";
import player from "./play-icon.jpg";
import team from "./team.png";

const Banner = () => {
  return (
    <section id="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {/* <div className="col" style={{ width: "900px", height: "184px" }}> */}
            <p>BEST DIGITAL AGENCY</p>
            <p>
              Subscribe to watch more videos on Website development,Digital
              marketing,Worldpress and graphic designing
            </p>
            <a href="#">
              <img src={player} className="play-btn" /> Watch tutorials
            </a>
          </div>
          <div className=" col-md-6">
            <img src={team} className="team d-block"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
{
  /*          <a href="#">
            <img src={player} className="col-sm play-btn" />
            Watch tutorials
  </a> */
}
