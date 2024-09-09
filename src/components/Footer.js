// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Add your custom CSS for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Career Counseling. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
