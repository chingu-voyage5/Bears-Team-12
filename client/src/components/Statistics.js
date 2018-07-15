import React, { Component } from 'react';
import axios from 'axios';

class Statistics extends Component {
  constructor() {
    super();
    this.state = {
      object: {}
    };
  }
  componentDidMount() {
    this.fetchOrders();
  }

  async fetchOrders() {
    const res = await axios.get('/api/orders');
    const object = {};

    res.data.forEach(order => {
      order.items.forEach(item => {
        if (object[item.name]) {
          object[item.name]++;
        } else {
          object[item.name] = 1;
        }
      });
    });

    return object;
  }

  render() {
    return <div>sTATS</div>;
  }
}

export default Statistics;
