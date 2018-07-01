import React, { Component } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';

class OrderReceipt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {},
      updateOrderStatusURL: '/api/orders/' + this.props.match.params.id
    };
  }

  componentDidMount() {
    this.fetchOrder();
  }

  async fetchOrder() {
    const res = await axios.get('/api/orders/' + this.props.match.params.id);
    this.setState({
      order: res.data
    });
    console.log('Fetching order', this.props.match.params.id);
    console.log('Order Details', this.state.order);
  }

  render() {
    return (
      <div className="orderOverview">
          <h4 className="orderOverview__title">Order Receipt</h4>
          <div>Order Name: {this.state.order.name}</div>
          <div>Order Table: {this.state.order.table}</div>
          <div>Order Status: {this.state.order.status}</div>
          <div>Order Notes: {this.state.order.notes}</div>
          <div>
            {this.state.order.items &&
            this.state.order.items.map(item => {
              return ( 
                <div key={item[0].name + item[0].count}>
                  {item[0].name} X {item[0].count}
                </div>
              );
            })}
          </div>
          <QRCode value={this.state.updateOrderStatusURL} />
          <div>Order Id: {this.state.order._id}</div>
          <a href="/menu">Start new order...</a>
      </div>
    );
  }
}

export default OrderReceipt;
