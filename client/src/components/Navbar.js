import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <h2 className="navbar__logo">Feast</h2>
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link className="navbar__link" to="/orders">
              Orders
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/menu" className="navbar__link">
              Menu
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/menu/new" className="navbar__link">
              Add Item
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/drinks" className="navbar__link">
              Drinks
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
