import React, { Component } from 'react';
import QRCode from 'qrcode.react';

class OrderReceipt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateOrderStatusURL: '/api/orders/' + this.props.order._id
    };
  }

  render() {
    return (
      <div>
          <br/>
          <h2>Order Receipt</h2>
          <div>Order Status {this.props.order.status}</div>
          <QRCode value={this.state.updateOrderStatusURL} />
        </div>
    );
  }
}

export default OrderReceipt;
