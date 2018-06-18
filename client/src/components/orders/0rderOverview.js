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
      <div>
        <h4>Order Overview</h4>
        {this.renderOrder()}
        <div className="total">Total: ${total}</div>
      </div>
    );
  }
}

export default OrderOverview;
