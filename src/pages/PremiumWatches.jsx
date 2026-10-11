import React from "react";
import Navbar from "../components/navbar"; // Navbar import
import CategoriesMenu from "../components/categories-menu";
import Banner from "../components/PremiumWatches/preBanner";
import Hero from "../components/PremiumWatches/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/footer";
import premiumWatches from "../data/premiumWatches";
import themes from "../themes";

export default function PremiumWatches() {
  return (
    <>
      <Navbar /> {/* Navbar render */}
      <CategoriesMenu /> {/* Catogories Menu */}
      <Banner />
      {/* <Hero />  */}
      <ProductCard
        data={premiumWatches.map((w, i) => ({ ...w, id: `premium-${i}` }))}
        theme={themes.premiumWatches}
      />
      {/* ProductCard */}
      <Footer /> {/* Footer */}
    </>
  );
}
