import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div>
          <a href="/orders">View Orders</a>
          <br />
          <a href="/menu">View Menu</a>
          <br />
          <a href="/menu/new">Add new item</a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
