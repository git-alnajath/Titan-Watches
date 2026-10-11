import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Hero.css"; // Hero section ku css separate ah vachirukka

export default function Sales() {
  return (
    <section className="sales">
      <div className="container">
        <div className="hero-content">
          <h2>Timeless Elegance, Modern Design</h2>
          <p>
            Discover our exquisite collection of premium watches crafted with
            precision and attention to detail.
          </p>
          <ScrollLink
            to="collection-grid"
            smooth={true}
            duration={500}
            className="cta-button"
          >
            Shop The Collection
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}
