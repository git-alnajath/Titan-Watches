import React from "react";
import WatchImg from "../../assets/Images/Bestsellars/Banners/Banner1.png";
import "./Banner2.css";

export default function Banner2() {
  return (
    <div className="banner2-container">
      <div className="banner2-wrapper">
        <div className="banner2-left">
          <p className="banner2-code-text">USE CODE</p>
          <h2 className="banner2-code">NEW10</h2>
        </div>
        <div className="banner2-middle">
          <p className="banner2-offer">
            Get <span>10% OFF*</span> On Your First Order
          </p>
          <p className="banner2-condition">On New Watches Over ₹2499</p>
        </div>
        <div className="banner2-right">
          <img src={WatchImg} alt="Watch" />
        </div>
      </div>
    </div>
  );
}
