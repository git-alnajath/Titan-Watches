// import React, { useState, useEffect } from "react";

// import Ads1 from "../../assets/Images/HomePage/AdsBanner/image_1.jpg";
// import Ads2 from "../../assets/Images/HomePage/AdsBanner/image_2.jpg";
// import Ads3 from "../../assets/Images/HomePage/AdsBanner/image_3.jpg";
// import Ads4 from "../../assets/Images/HomePage/AdsBanner/image_4.jpg";
// import Ads5 from "../../assets/Images/HomePage/AdsBanner/image_5.jpg"; // 🔥 duplicate fix
// import "./AdsCarousel.css"; // external CSS

// const images = [Ads1, Ads2, Ads3, Ads4, Ads5];

// export default function AdsCarousel() {
//   const [current, setCurrent] = useState(0);

//   // Auto slide every 3 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="main-container">
//       <div className="ads-carousel-container">
//         {/* Wrapper */}
//         <div
//           className="ads-carousel-wrapper"
//           style={{ transform: `translateX(-${current * 100}%)` }}
//         >
//           {images.map((img, index) => (
//             <img key={index} src={img} alt={`Banner ${index + 1}`} />
//           ))}
//         </div>

//         {/* Dots */}
//         <div className="ads-carousel-dots">
//           {images.map((_, index) => (
//             <span
//               key={index}
//               className={`ads-dot ${current === index ? "active" : ""}`}
//               onClick={() => setCurrent(index)}
//             ></span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";

import Ads1 from "../../assets/Images/Hero-Page/Banners/Clocks_Header.jpg";
import Ads2 from "../../assets/Images/Hero-Page/Banners/Gifting_Watches_Header.jpg";
import Ads3 from "../../assets/Images/Hero-Page/Banners/KC.jpg";
import Ads4 from "../../assets/Images/Hero-Page/Banners/login-banner-bg-gold.jpg";
import Ads5 from "../../assets/Images/Hero-Page/Banners/Raga_Cocktails_Header_Women.jpg"; // 🔥 duplicate fix
import "./AdsCarousel.css"; // external CSS

const images = [Ads1, Ads2, Ads3, Ads4, Ads5];

export default function AdsCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="main-container">
      <div className="ads-carousel-container">
        {/* Wrapper */}
        <div
          className="ads-carousel-wrapper"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Banner ${index + 1}`} />
          ))}
        </div>

        {/* Dots */}
        <div className="ads-carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`ads-dot ${current === index ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}