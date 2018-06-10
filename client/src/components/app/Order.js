import React, { Component } from 'react';

class Order extends Component {
  constructor() {
    super();
    this.state = {
      meal1: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newOrder = {
      meal1: this.state.meal1
    };

    console.log(newOrder);
  }

  render() {
    return (
      <div>
        <h1>Order Screen</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="meal1"
            value={this.state.meal1}
            onChange={this.onChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Order;
