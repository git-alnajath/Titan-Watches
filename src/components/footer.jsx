import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import {
  FaApple,
  FaGooglePlay,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mobile-footer">
      <div className="footer-container">
        {/* Collections Section */}
        <div className="footer-section collections-section">
          <input
            type="checkbox"
            id="collections-toggle"
            className="dropdown-toggle"
          />
          <label htmlFor="collections-toggle" className="footer-header">
            <h3 className="footer-title">COLLECTIONS</h3>
            <span className="dropdown-icon">▼</span>
          </label>
          <div className="footer-links">
            <Link to="/Men">Men's Watches</Link>
            <Link to="/Women">Women's Watches</Link>
            <Link to="/SmartWatches">Smart Watches</Link>
            <Link to="/Limited">Limited Edition</Link>
          </div>
        </div>

        {/* Customer Service */}
        <div className="footer-section customer-ser-section">
          <input
            type="checkbox"
            id="customer-service-toggle"
            className="dropdown-toggle"
          />
          <label htmlFor="customer-service-toggle" className="footer-header">
            <h3 className="footer-title">CUSTOMER SERVICE</h3>
            <span className="dropdown-icon">▼</span>
          </label>
          <div className="footer-links">
            <Link to="/payment">Payment Option</Link>
            <Link to="/track-order">Track Order</Link>
            <Link to="/encircle">Encircle Program</Link>
            <Link to="/stores">Find Titan World Stores</Link>
          </div>
        </div>

        {/* Contact Us */}
        <div className="footer-section contact-section">
          <input
            type="checkbox"
            id="contact-us-toggle"
            className="dropdown-toggle"
          />
          <label htmlFor="contact-us-toggle" className="footer-header">
            <h3 className="footer-title">CONTACT US</h3>
            <span className="dropdown-icon">▼</span>
          </label>
          <div className="footer-links">
            <a href="tel:8056353551">+91 8056-353-551</a>
            <a
              href="mailto:alnajath1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              alnajath1@gmail.com
            </a>
            <Link to="/help">Help & Contact</Link>
            <Link to="/faqs">FAQs</Link>
          </div>
        </div>

        {/* About Titan */}
        <div className="footer-section about-section">
          <input
            type="checkbox"
            id="about-toggle"
            className="dropdown-toggle"
          />
          <label htmlFor="about-toggle" className="footer-header">
            <h3 className="footer-title">ABOUT TITAN</h3>
            <span className="dropdown-icon">▼</span>
          </label>
          <div className="footer-links">
            <Link to="/brand-protection">Brand Protection</Link>
            <Link to="/corporate">Corporate</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </div>

        {/* App Download */}
        <div className="app-download">
          <h3 className="footer-title">Download Titan World App</h3>
          <div className="app-d">
            <div className="app-buttons">
              <a href="#" className="app-btn">
                <FaApple />
                <p>
                  Download on the <br />
                  <span>App Store</span>
                </p>
              </a>
              <a href="#" className="app-btn">
                <FaGooglePlay />
                <p>
                  GET IT ON <br />
                  <span>Google Play</span>
                </p>
              </a>
            </div>

            {/* Social Media */}
            <div className="social-section">
              <h3 className="footer-title">Follow Us With</h3>
              <div className="social-icons">
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Help Section */}
            <div className="help-section">
              <p className="whatsapp-text">
                <span className="help-text">
                  Want Help? Click Here To Chat With Us On
                </span>
                <a href="#">
                  <FaWhatsapp />
                </a>
              </p>
              <p className="timing">
                Operating Hours: 10:00AM To 10:00PM <br /> Monday To Sunday
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        {/* Payment Methods */}
        <div className="payment-section">
          <div className="payment-methods">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Visa"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="MasterCard"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
            />
          </div>
        </div>

        <div className="footer-copyright">
          <p className="copyright">
            © 2025 Titan Company Limited. All Rights Reserved.
          </p>
          <div className="legal-links">
            <Link to="/terms">Terms & Conditions |</Link>
            <Link to="/privacy">Privacy Policy |</Link>
            <Link to="/wearable-privacy">Wearable Privacy Policy |</Link>
            <Link to="/warranty">Warranty Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
