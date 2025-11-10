import React from 'react';
import footerLogo from '../assets/Footer.png'; // your footer image

import './Footer.css'; // CSS for footer (create this file)

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-3 text-center">
      <div className="container">
        <img
          src={footerLogo}
          alt="Footer Logo"
          className="footer-logo"
          style={{ height: '120px', width: 'auto', cursor: 'pointer', marginBottom:"10px" }}
        />
        <p className="mt-2">&copy; Approved by AICTE, DTE -Govt. of Maharashtra & Affiliated to Shivaji University<br></br>
© 2025 DYP Group.<br></br>

Last Updated on: May 22, 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
