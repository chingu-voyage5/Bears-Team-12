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

  handleProgressUpdate(orderId) {
    axios
      .put(`/api/orders/${orderId}`, {
        method: 'clicked'
      })
      .then(res => console.log(res));
  }

  async fetchOrders() {
    const res = await axios.get('/api/orders');
    this.setState({
      orders: res.data
    });
  }

  renderOrders() {
    return this.state.orders.map(order => {
      return (
        <div key={order._id}>
          <br />
          <a href={'/orders/' + order._id}>Receipt</a> | {order.name} | Notes:{' '}
          {order.notes || 'None'} | Stage: {order.status} | {order.table} | Time
          created: {order.created} | Time updated:
          {order.updated} |{' '}
          <button disabled={order.status == '4'} onClick={() => this.handleProgressUpdate(order._id)}>
            Update Progress
          </button>
          <br />
          <div>
            {order.items.map(item => {
              return (
                <div key={item[0].name + item[0].count}>
                  {item[0].name}: {item[0].count} X {item[0].price} ={' '}
                  {item[0].count * item[0].price}
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
