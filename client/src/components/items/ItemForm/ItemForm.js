import React, { Component } from 'react';
import axios from 'axios';

class ItemForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    const {name, price, type} = this.props
    axios.post('/api/items', { name, price, type });
  }

  render() {
    const { name, price, type, soup, handleInputChange } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Price:
          <input
            name="price"
            type="number"
            value={price}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Type:
          <select name="type" onChange={handleInputChange}>
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
