import React, { Component } from 'react';
import axios from 'axios';

class ItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      type: 'Adult',
      soup: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  async handleSubmit(event) {
    axios.post('/api/items', {
      name: this.state.name,
      price: this.state.price,
      type: this.state.type
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
        <label>
          Price:
          <input
            name="price"
            type="number"
            value={this.state.price}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Type:
          <select value={this.state.value} onChange={this.handleInputChange}>
            <option value="adult">Adult</option>
            <option value="children">Children</option>
            <option value="soup">Soup</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ItemForm;
