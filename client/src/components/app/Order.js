import React, { Component } from 'react';
import axios from 'axios';

class Order extends Component {
  constructor() {
    super();
    this.state = {
      meal1: ''
    };

    this.onOrderInputChange = this.onOrderInputChange.bind(this);
    this.onOrderSubmit = this.onOrderSubmit.bind(this);
  }

  onOrderInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onOrderSubmit(e) {
    e.preventDefault();

    const newOrder = {
      meal1: this.state.meal1
    };

    // POST on order submit
    axios
      // POST request
      .post('api/orders/order', newOrder)
      // log API response
      .then(res => console.log(res.data))
      // log errors
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Order Screen</h1>
        <form onSubmit={this.onOrderSubmit}>
          <input
            type="text"
            name="meal1"
            value={this.state.meal1}
            onChange={this.onOrderInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Order;
