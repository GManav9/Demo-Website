import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="krossoverr-footer">
      <div className="container">
        <div className="footer-top row">
          {/* Company Info */}
          <div className="col-md-3 col-12 mb-4">
            <h4 className="footer-brand">Krossoverr Brand Solutions</h4>
            <p className="footer-description">
              We craft powerful brand experiences with strategic thinking,
              creative excellence, and seamless execution across all channels.
            </p>
            <a
              href="mailto:info@Krossoverr.com"
              className="text-decoration-none"
            >
              <p className="footer-contact">
                <FaEnvelope /> info@Krossoverr.com
              </p>
            </a>
            <p className="footer-contact">
              <FaPhoneAlt /> +91 70113 44154
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-md-3 col-6 mb-4">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 col-6 mb-4">
            <h5 className="footer-heading">Our Expertise</h5>
            <ul className="footer-links">
              <li>
                <Link to="/services">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/services">Events & Activations</Link>
              </li>
              <li>
                <Link to="/services">Retail Branding</Link>
              </li>
              <li>
                <Link to="/services">Corporate Gifting</Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3 col-12 mb-4">
            <h5 className="footer-heading">Follow Us</h5>
            <ul className="footer-links footer-social-list">
              <li>
                <a
                  href="https://instagram.com/Krossoverr_Brand_solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebookF className="me-2" /> Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn className="me-2" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0">
            &copy; {new Date().getFullYear()} Krossoverr Brand Solutions. All
            rights reserved.
          </p>
          <div className="footer-socials">
            <a href="#">
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/Krossoverr_Brand_solutions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
