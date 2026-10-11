import React from "react";
import { Link } from "react-router-dom";

import "./HeroHome.css";
// import heroPic from "../../assets/Images/hero-pic.jpg";
// import heroPic from "../../assets/images/hero-pic.jpeg";
import hero_pic from "../../assets/images/Hero-Page/hero-pic.jpeg";
// import hero_pic1 from "../../assets/Images/Watches/contact-watch-png.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={hero_pic} alt="HP-pic" />
      <aside>
        <div id="hP-info">
          <h1>CRAFTED FOR TIME, DESIGNED FOR YOU</h1>
          <div id="buttons">
            <Link to="/Men" className="btn btn1">
              Explore for Men
            </Link>
            <Link to="/Women" className="btn btn2">
              Explore for Women
            </Link>
            {/* <button className="btn btn2">Explore for Women</button> */}
          </div>
        </div>
      </aside>
    </section>
  );
}
