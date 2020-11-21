import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

export default function Header({onChange}) {
  return (
    <div className="__dml header">
      <ul>
        <Link to="/" className="nav-links" onClick={() => onChange ()}>
          Home
        </Link>
        <Link to="/about-us" className="nav-links" onClick={() => onChange ()}>
          About Us
        </Link>
        <Link to="/products" className="nav-links" onClick={() => onChange ()}>
          Our Products
        </Link>
      </ul>
    </div>
  );
}
