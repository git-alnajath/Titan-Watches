// pbBanner.jsx
import React, { useState, useEffect } from "react";
import Banner1 from "../../assets/Images/PremiumWatches/Banner/Banner1.jpg";
import Banner2 from "./preBanner2";
import "./preBanner.css";

const banners = [<img src={Banner1} alt="Banner 1" />, <Banner2 />];

export default function PreBanner() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pb-carousel-container">
      {/* Wrapper */}
      <div
        className="pb-carousel-wrapper"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div key={index} className="pb-carousel-slide">
            {banner}
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        className="pb-carousel-btn pb-prev"
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1))
        }
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        className="pb-carousel-btn pb-next"
        onClick={() => setCurrent((prev) => (prev + 1) % banners.length)}
      >
        ❯
      </button>

      {/* Dots */}
      <div className="pb-carousel-dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`pb-dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
