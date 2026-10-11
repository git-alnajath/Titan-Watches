import React from "react";
import Navbar from "../components/navbar"; // Navbar import
import CategoriesMenu from "../components/categories-menu";
import A_Carousel from "../components/Home/A-Carousel";
import Hero from "../components/Home/Hero";
import AdsBanner from "../components/Home/AdsCarousel";

import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Navbar /> {/* Navbar render */}
      <CategoriesMenu /> {/* Catogories Menu */}
      <A_Carousel />
      <Hero /> {/* Hero */}
      <AdsBanner />
      <Footer /> {/* Footer */}
    </>
  );
}
