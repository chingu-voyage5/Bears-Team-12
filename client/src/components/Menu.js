import React, { Component } from 'react';
import axios from 'axios';
import MenuItem from './items/MenuItem';
import OrderOverview from './orders/OrderOverview';
import OrderReceipt from './orders/OrderReceipt';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [],
      name: '',
      order: {},
      notes: '',
      previousOrder: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMenuItems();
  }

  async fetchMenuItems() {
    const res = await axios.get('/api/items');
    this.setState({ menuItems: res.data }, () => {
      this.state.menuItems.forEach(item => {
        const itemFullName = `${item.name} (${item.type})`;
        this.setState(
          {
            [itemFullName]: item.price
          },
          () => console.log(this.state)
        );
      });
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // Controlled component - values of input inside form are connected to component's state
    if (target.name === 'name' || target.name === 'notes') {
      this.setState({
        [name]: value
      });
    } else {
      const newOrder = this.state.order;

      newOrder[name] = { count: value, price: this.state[name] };

      this.setState(
        {
          order: newOrder
        },
        () => console.log(this.state)
      );
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post('/api/orders', {
        name: this.state.name,
        notes: this.state.notes,
        order: this.state.order
      })
      .then(response => {
        // Controlled component - reset form values
        this.setState({
          name: '',
          order: {},
          notes: '',
          previousOrder: response.data
        });
      });
  }

  renderItems() {
    return this.state.menuItems.map(item => {
      return (
        <MenuItem
          key={item.name + item.type}
          item={item}
          handleInputChange={this.handleInputChange}
          menuState={this.state}
        />
      );
    });
  }

  render() {
    return (
      <div className="menu">
        <form onSubmit={this.handleSubmit}>
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
          <br />
          {this.renderItems()}
          <br />
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
          <br />
          <OrderOverview order={this.state.order} menuState={this.state} />
            {this.state.previousOrder._id && 
              <a href={'/orders/' + this.state.previousOrder._id }>
                <h2>Print Receipt for {this.state.previousOrder.name}'s Order</h2>
              </a>
            }
        </form>
      </div>
    );
  }
}

export default Menu;
