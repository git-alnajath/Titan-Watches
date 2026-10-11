// import React, { useState, useEffect } from "react";
// import Banner1 from "../../assets/Images/Sales/Banner/SalesBanner1.png";
// import Banner2 from "../../assets/Images/Sales/Banner/SalesBanner2.png";
// import "./SalesBanner.css"; // external CSS
// import Banner1 from "../../assets/Images/Sales/Banner/sale_1.jpg";
// import Banner2 from "../../assets/Images/Sales/Banner/sale_2.jpg";

// const images = [Banner1, Banner2]; // 👈 imports use pannunga

// export default function SalesCarousel() {
//   const [current, setCurrent] = useState(0);

//   // Auto slide every 3 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="sales-carousel-container">
//       {/* Wrapper */}
//       <div
//         className="sales-carousel-wrapper"
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >
//         {images.map((img, index) => (
//           <img key={index} src={img} alt={`Banner ${index + 1}`} />
//         ))}
//       </div>

//       {/* Prev Button */}
//       <button
//         className="sales-carousel-btn sales-prev"
//         onClick={() =>
//           setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
//         }
//       >
//         ❮
//       </button>

//       {/* Next Button */}
//       <button
//         className="sales-carousel-btn sales-next"
//         onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
//       >
//         ❯
//       </button>

//       {/* Dots */}
//       <div className="sales-carousel-dots">
//         {images.map((_, index) => (
//           <span
//             key={index}
//             className={`sales-dot ${current === index ? "active" : ""}`}
//             onClick={() => setCurrent(index)}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import Banner1 from "../../assets/Images/Sales/Banner/sale_1.jpg";
import Banner2 from "../../assets/Images/Sales/Banner/sale_2.jpg";
import "./SalesBanner.css"; // external CSS

const images = [Banner1, Banner2]; // 👈 imports use pannunga

export default function SalesCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sales-carousel-container">
      {/* Wrapper */}
      <div
        className="sales-carousel-wrapper"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Banner ${index + 1}`} />
        ))}
      </div>

      {/* Prev Button */}
      <button
        className="sales-carousel-btn sales-prev"
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        className="sales-carousel-btn sales-next"
        onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
      >
        ❯
      </button>

      {/* Dots */}
      <div className="sales-carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`sales-dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}