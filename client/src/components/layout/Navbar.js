import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <h1>This is a navbar!</h1>
        <ul>
          <li>
            <a href="status.html">Status</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="settings.html">Settings</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
