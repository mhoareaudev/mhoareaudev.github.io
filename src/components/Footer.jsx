// src/components/Footer.jsx
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>
        Certains liens présents sur ce site sont affiliés. Cela signifie que je peux recevoir une commission
        si vous effectuez un achat via ces liens, sans coût supplémentaire pour vous.
      </p>
      <p>
        &copy; {new Date().getFullYear()} GPU Finder – Tous droits réservés. |
        <Link to="/mentions-legales" className="footer-link"> Mentions légales</Link>
      </p>
    </footer>
  );
};

export default Footer;
