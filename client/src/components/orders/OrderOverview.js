import React, { Component } from 'react';

class OrderOverview extends Component {
  renderOrder() {
    const { order } = this.props;
    const keys = Object.keys(order);

    return keys.map(key => {
      if (order[key].count > 0) {
        const { count, price } = order[key];
        const cost = count * price;
        return (
          <div key={`${key}${order[key].count}`}>
            {key} = {count} X ${price} = ${cost}
            <br />
            <br />
          </div>
        );
      } else {
        return;
      }
    });
  }

  render() {
    const { order } = this.props;
    const keys = Object.keys(order);
    let total = 0;

    if (keys.length > 0) {
      keys.forEach(key => {
        total += order[key].count * order[key].price;
      });
    }

    return (
      <div className="orderOverview">
        <h4 className="orderOverview__title">Order Overview</h4>
        {this.renderOrder()}
        <summary className="orderOverview__summary">
          <p className="orderOverview__total">Total</p>
          <p className="orderOverview__total">${total}</p>
          {/* TODO: Make this button a reusable component */}
          <input type="submit" value="Submit Order" className="orderOverview__btn" />
        </summary>
      </div>
    );
  }
}

export default OrderOverview;

// starting point for Name and Notes inputs that were previously in the Menu
// component

{
  /* <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </label>
          <br /> */
}
{
  /* <br />
          <label>
            Notes:
            <input
              name="notes"
              type="text"
              value={this.state.notes}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <br /> */
}
{
  /* </form> */
}
