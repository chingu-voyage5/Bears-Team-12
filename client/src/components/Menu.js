import React, { Component } from 'react';
import axios from 'axios';
import MenuItem from './items/MenuItem';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [],
      name: '',
      order: {},
      notes: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMenuItems();
  }

  async fetchMenuItems() {
    const res = await axios.get('/api/items');
    this.setState({ menuItems: res.data });
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

      newOrder[name] = { count: value };

      this.setState({
        order: newOrder
      });
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
      .then(() => {
        // Controlled component - reset form values
        this.setState({
          name: '',
          order: {},
          notes: ''
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
        <input type="submit" value="Submit Order" />
      </form>
    );
  }
}

export default Menu;
