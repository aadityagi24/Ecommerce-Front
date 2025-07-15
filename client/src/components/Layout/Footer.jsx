import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import "../../styles/FooterStyles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h3>All Rights Reserved &copy; {new Date().getFullYear()} Aadi_Tech</h3>
          <p>Empowering shopping with tech. Built with 💻 by Aadi_Tech</p>
        </div>

        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/policy">Privacy Policy</Link>
        </div>

        <div className="footer-contact">
          <p><FaPhoneAlt /> +91-999-999-9999</p>
          <p><FaEnvelope /> support@aaditech.com</p>
        </div>

        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
