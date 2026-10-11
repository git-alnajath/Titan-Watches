// BsBanner.jsx
import React, { useState, useEffect } from "react";
import Banner1 from "../../assets/Images/Bestsellars/Banners/Banner1.png";
import Banner2 from "./Banner2.jsx";
import "./BsBanner.css";

const banners = [<img src={Banner1} alt="Banner 1" />, <Banner2 />];

export default function BsBanner() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bs-carousel-container">
      {/* Wrapper */}
      <div
        className="bs-carousel-wrapper"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div key={index} className="bs-carousel-slide">
            {banner}
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        className="bs-carousel-btn bs-prev"
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1))
        }
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        className="bs-carousel-btn bs-next"
        onClick={() => setCurrent((prev) => (prev + 1) % banners.length)}
      >
        ❯
      </button>

      {/* Dots */}
      <div className="bs-carousel-dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`bs-dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
