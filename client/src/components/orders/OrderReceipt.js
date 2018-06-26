import React, { Component } from 'react';
import { withRouter } from 'react-router';
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
  }


  render() {
    return (
      <div className="orderReceipt">
          <br/>
          <h2>Order Receipt</h2>
          <div>Order Name {this.state.order.name}</div>
          <div>Order Status {this.state.order.status}</div>
          <div>Order Id {this.props.match.params.id}</div>
          <br/>
          <QRCode value={this.state.updateOrderStatusURL} />
      </div>
    );
  }
}

export default withRouter(OrderReceipt);
