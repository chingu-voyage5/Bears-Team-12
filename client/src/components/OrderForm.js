import React, { Component } from 'react';
import axios from 'axios';

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      items: {},
      notes: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // Controlled components - values inside form are connected to component's state
    if (target.name === 'name' || target.name === 'notes') {
      this.setState({
        [name]: value
      });
    } else {
      const newItems = this.state.items;

      newItems[name] = { count: value };

      this.setState({
        items: newItems
      });

      console.log('changing items');
    }

    console.log(this.state);
  }

  async handleSubmit(event) {
    axios.post('/api/orders', {
      name: this.state.name,
      notes: this.state.notes,
      items: this.state.items
    });
  }

  renderItems() {
    return this.props.items.map(item => {
      return (
        <div key={item.name}>
          <label>
            <div>{item.name}</div>
            <div>{item.price}</div>
            <input
              name={item.name}
              type="number"
              onChange={this.handleInputChange}
              min={0}
            />
          </label>
        </div>
      );
    });
  }

  render() {
    console.log(this.state);
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
          Notes
          <input
            name="notes"
            type="text"
            value={this.state.notes}
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default OrderForm;
