import React, { Component } from 'react';
import axios from 'axios';

class DrinksMenu extends Component {
  constructor() {
    super();
    this.state = {
      drinks: []
    };
  }

  componentDidMount() {
    this.fetchDrinks();
  }

  async fetchDrinks() {
    const res = await axios.get('/api/drinks');
    console.log(res);
    this.setState({ drinks: res.data });
  }

  renderItems() {
    return this.state.drinks.map(item => {
      return (
        <div key={item.name}>
          {item.name} {item.price}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div>Drinks Menu</div>
        <div>
          <a href="/drinks/new">Add New Drink</a>
        </div>
        <br />
        {this.renderItems()}
      </div>
    );
  }
}

export default DrinksMenu;
