// naBanner.jsx
import React, { useState, useEffect } from "react";
import Banner1 from "../../assets/Images/NewArrivals/Banner/Banner1.jpg";
import Banner2 from "./newBanner2";
import "./NewBanner.css";

const banners = [<img src={Banner1} alt="Banner 1" />, <Banner2 />];

export default function NewBanner() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="na-carousel-container">
      {/* Wrapper */}
      <div
        className="na-carousel-wrapper"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div key={index} className="na-carousel-slide">
            {banner}
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        className="na-carousel-btn na-prev"
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1))
        }
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        className="na-carousel-btn na-next"
        onClick={() => setCurrent((prev) => (prev + 1) % banners.length)}
      >
        ❯
      </button>

      {/* Dots */}
      <div className="na-carousel-dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`na-dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
