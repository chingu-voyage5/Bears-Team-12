// TODO: change a tags to links

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <h2 className="navbar__logo">Feast</h2>
        <ul className="navbar__list">
          <li className="navbar__item">
            <a className="navbar__link" href="/scanner">
              Scan QR Code
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="/orders">
              Orders
            </a>
          </li>
          <li className="navbar__item">
            <a href="/menu" className="navbar__link">
              Menu
            </a>
          </li>
          <li className="navbar__item">
            <a href="/menu/new" className="navbar__link">
              Add Item
            </a>
          </li>
          <li className="navbar__item">
            <a href="/drinks" className="navbar__link">
              Drinks
            </a>
          </li>
          <li className="navbar__item">
            <a href="/statistics" className="navbar__link">
              Statistics
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
