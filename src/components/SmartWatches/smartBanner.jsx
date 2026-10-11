import React, { useState, useEffect } from "react";
import Banner1 from "../../assets/Images/SmartWatches/Banners/smartBanner1.jpg";
import Banner2 from "../../assets/Images/SmartWatches/Banners/smartBanner2.jpg";
import "./smartBanner.css"; // external CSS

const images = [Banner1, Banner2]; // 👈 imports use pannunga

export default function SmartCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="smart-carousel-container">
      {/* Wrapper */}
      <div
        className="smart-carousel-wrapper"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Banner ${index + 1}`} />
        ))}
      </div>

      {/* Prev Button */}
      <button
        className="smart-carousel-btn smart-prev"
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        className="smart-carousel-btn smart-next"
        onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
      >
        ❯
      </button>

      {/* Dots */}
      <div className="smart-carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`smart-dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
