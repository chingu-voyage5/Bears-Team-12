import React, { Component } from 'react';
import axios from 'axios';
import OrderForm from './OrderForm';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    this.fetchItems();
  }

  async fetchItems() {
    const res = await axios.get('/api/items');
    this.setState({ items: res.data });
    console.log('fetching items');
    console.log(res);
  }

  render() {
    return <OrderForm items={this.state.items} />;
  }
}

export default Menu;
