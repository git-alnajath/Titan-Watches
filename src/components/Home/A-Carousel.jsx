// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "./BannerCarousel.css";

// import ragaBanner from "../../assets/Images/Hero-Page/raga-banner1.jpg";
// import bestsellerBanner from "../../assets/Images/Hero-Page/bestsellar-banner2.jpg";
// import newArrivalsBanner from "../../assets/Images/Hero-Page/new-arrivals-banner3.jpg";
// import smartBanner from "../../assets/Images/Hero-Page/Smart-banner4.jpg";

// // banners with unique className
// const banners = [
//   {
//     name: "Cocktails",
//     img: ragaBanner,
//     heading: "RAGA",
//     span: "by",
//     brand: "TITAN",
//     buttonLabel: "Shop Now",
//     buttonLink: "/cocktails",
//     className: "banner-cocktails", // 🔹 added
//   },
//   {
//     name: "Bestsellers",
//     img: bestsellerBanner,
//     buttonLabel: "MEN",
//     buttonLink: "/Men",
//     buttonLabel2: "WOMEN",
//     buttonLink2: "/Women",
//     className: "banner-bestsellers", // 🔹 added
//   },
//   {
//     name: "New Arrivals",
//     img: newArrivalsBanner,
//     buttonLabel: "Explore Now",
//     buttonLink: "/new-arrivals",
//     className: "banner-arrivals", // 🔹 added
//   },
//   {
//     name: "Smart",
//     img: smartBanner,
//     className: "banner-smart", // 🔹 added
//   },
// ];

// export default function BannerCarousel() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const swiperRef = useRef(null);

//   // progress reset every time activeIndex changes
//   useEffect(() => {
//     setProgress(0);
//     let step = 100 / 60; // 60 steps for ~3s
//     const interval = setInterval(() => {
//       setProgress((p) => {
//         if (p >= 100) {
//           clearInterval(interval);
//           return 100;
//         }
//         return p + step;
//       });
//     }, 50);

//     return () => clearInterval(interval);
//   }, [activeIndex]);

//   return (
//     <div className="carousel-container">
//       <Swiper
//         modules={[Autoplay, Navigation]}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         loop={true}
//         navigation={true}
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//       >
//         {banners.map((banner, i) => (
//           <SwiperSlide key={i}>
//             <div className="banner-slide">
//               <img src={banner.img} alt={banner.name} className="banner-img" />

//               {/* 🔹 dynamic className */}
//               <div className={`banner-info ${banner.className || ""}`}>
//                 {banner.heading && (
//                   <div className="details">
//                     {/* Top line */}
//                     <h1 className="banner-heading">{banner.heading}</h1>

//                     {/* Middle line */}
//                     {(banner.span || banner.brand) && (
//                       <p className="banner-subtext">
//                         {banner.span && <span>{banner.span}</span>}{" "}
//                         {banner.brand && <strong>{banner.brand}</strong>}
//                       </p>
//                     )}

//                     {/* Bottom line */}
//                     {banner.name && (
//                       <p className="banner-cocktail">{banner.name}</p>
//                     )}
//                   </div>
//                 )}

//                 {banner.buttonLabel && banner.buttonLink && (
//                   //   <a href={banner.buttonLink} className="banner-btn">
//                   //     {banner.buttonLabel}
//                   //   </a>

//                   <Link to={banner.buttonLink} className="banner-btn">
//                     {banner.buttonLabel}
//                   </Link>
//                 )}

//                 {banner.buttonLabel2 && banner.buttonLink2 && (
//                   //   <a href={banner.buttonLink2} className="banner-btn">
//                   //     {banner.buttonLabel2}
//                   //   </a>

//                   <Link to={banner.buttonLink2} className="banner-btn">
//                     {banner.buttonLabel2}
//                   </Link>
//                 )}
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* bottom names + progress */}
//       <div className="banner-names">
//         {banners.map((banner, i) => (
//           <div
//             key={i}
//             className={`banner-name ${i === activeIndex ? "active" : ""}`}
//             onClick={() => swiperRef.current?.slideToLoop(i)}
//           >
//             <span>{banner.name}</span>
//             {i === activeIndex && (
//               <div
//                 className="progress-bar"
//                 style={{ width: `${progress}%` }}
//               ></div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./BannerCarousel.css";

import ragaBanner from "../../assets/Images/Hero-Page/raga-banner1.jpg";
import bestsellerBanner from "../../assets/Images/Bestsellars/Banners/Banner1.png";
import newArrivalsBanner from "../../assets/Images/NewArrivals/Banner/Banner1.jpg";
import smartBanner from "../../assets/Images/SmartWatches/Banners/smartBanner1.jpg";

// banners with unique className
const banners = [
  {
    name: "Cocktails",
    img: ragaBanner,
    heading: "RAGA",
    span: "by",
    brand: "TITAN",
    buttonLabel: "Shop Now",
    buttonLink: "/cocktails",
    className: "banner-cocktails", // 🔹 added
  },
  {
    name: "Bestsellers",
    img: bestsellerBanner,
    buttonLabel: "MEN",
    buttonLink: "/Men",
    buttonLabel2: "WOMEN",
    buttonLink2: "/Women",
    className: "banner-bestsellers", // 🔹 added
  },
  {
    name: "New Arrivals",
    img: newArrivalsBanner,
    buttonLabel: "Explore Now",
    buttonLink: "/new-arrivals",
    className: "banner-arrivals", // 🔹 added
  },
  {
    name: "Smart",
    img: smartBanner,
    className: "banner-smart", // 🔹 added
  },
];

export default function BannerCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef(null);

  // progress reset every time activeIndex changes
  useEffect(() => {
    setProgress(0);
    let step = 100 / 60; // 60 steps for ~3s
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + step;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {banners.map((banner, i) => (
          <SwiperSlide key={i}>
            <div className="banner-slide">
              <img src={banner.img} alt={banner.name} className="banner-img" />

              {/* 🔹 dynamic className */}
              <div className={`banner-info ${banner.className || ""}`}>
                {banner.heading && (
                  <div className="details">
                    {/* Top line */}
                    <h1 className="banner-heading">{banner.heading}</h1>

                    {/* Middle line */}
                    {(banner.span || banner.brand) && (
                      <p className="banner-subtext">
                        {banner.span && <span>{banner.span}</span>}{" "}
                        {banner.brand && <strong>{banner.brand}</strong>}
                      </p>
                    )}

                    {/* Bottom line */}
                    {banner.name && (
                      <p className="banner-cocktail">{banner.name}</p>
                    )}
                  </div>
                )}

                {banner.buttonLabel && banner.buttonLink && (
                  //   <a href={banner.buttonLink} className="banner-btn">
                  //     {banner.buttonLabel}
                  //   </a>

                  <Link to={banner.buttonLink} className="banner-btn">
                    {banner.buttonLabel}
                  </Link>
                )}

                {banner.buttonLabel2 && banner.buttonLink2 && (
                  //   <a href={banner.buttonLink2} className="banner-btn">
                  //     {banner.buttonLabel2}
                  //   </a>

                  <Link to={banner.buttonLink2} className="banner-btn">
                    {banner.buttonLabel2}
                  </Link>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* bottom names + progress */}
      <div className="banner-names">
        {banners.map((banner, i) => (
          <div
            key={i}
            className={`banner-name ${i === activeIndex ? "active" : ""}`}
            onClick={() => swiperRef.current?.slideToLoop(i)}
          >
            <span>{banner.name}</span>
            {i === activeIndex && (
              <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}