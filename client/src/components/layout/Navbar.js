import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <h5>This is a navbar!</h5>
        <ul>
          <li>
            <Link to="/order">Order</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
