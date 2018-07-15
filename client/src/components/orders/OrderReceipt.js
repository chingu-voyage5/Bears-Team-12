import React, { Component } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';

class OrderReceipt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {},
      total: 0
    };
  }

  componentDidMount() {
    this.fetchOrder();
  }

  async fetchOrder() {
    const res = await axios.get('/api/orders/' + this.props.match.params.id);
    this.setState({
      order: res.data,
      total: res.data.items
              .map(item => item[0].price * item[0].count)
              .reduce((prev, next) => prev + next)
    });
  }

  handleProgressUpdate(orderId) {
    axios
      .put(`/api/orders/${orderId}`, {
        method: 'clicked'
      })
      .then(res => {
          this.setState({
            order: res.data
          });
      });
  }

  render() {
    return (
      <div className="orderOverview">
          <h4 className="orderOverview__title">Order Receipt</h4>
          <QRCode value={this.props.match.params.id} />
          <div>Order Id: {this.state.order._id}</div>
          <div>Order Name: {this.state.order.name}</div>
          <div>Order Table: {this.state.order.table}</div>
          <div>Order Status: {this.state.order.status}</div>
          <button disabled={this.state.order.status == '4'} onClick={() => this.handleProgressUpdate(this.props.match.params.id)}>
            Update Progress
          </button>
          <div>Order Notes: {this.state.order.notes}</div>
          <div>
            {this.state.order.items &&
            this.state.order.items.map(item => {
              return ( 
                <div key={item[0].name + item[0].count}>
                  {item[0].name}: {item[0].count} X {item[0].price} = {item[0].count * item[0].price}
                </div>
              );
            })}
            <summary className="orderOverview__summary">
              <p className="orderOverview__total">Total</p>
              <p className="orderOverview__total">${this.state.total}</p>
            </summary>
            <a href="/menu">Start new order...</a>
          </div>
      </div>
    );
  }
}

export default OrderReceipt;
