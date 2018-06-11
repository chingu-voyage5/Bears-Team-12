import React, { Component } from 'react';
import axios from 'axios';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }

  componentDidMount() {
    this.fetchOrders();
  }

  async fetchOrders() {
    const res = await axios.get('/api/orders');
    this.setState({
      orders: res.data
    });
    console.log('Fetching orders');
    console.log(this.state);
  }

  renderOrders() {
    return this.state.orders.map(order => {
      return (
        <div key={order._id}>
          <br />
          {order.name} | {order.notes} | {order.status} | {order.table} |
          {order.created} | {order.updated}
          <br />
          <div>
            {order.items.map(item => {
              return (
                <div key={item[0].name + item[0].count}>
                  {item[0].name} X {item[0].count}
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderOrders()}</div>;
  }
}

export default Orders;
