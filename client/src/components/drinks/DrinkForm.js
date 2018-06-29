import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class DrinkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0
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

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post('/api/drinks', {
        name: this.state.name,
        price: this.state.price
      })
      .then(() => {
        this.props.history.push('/drinks');
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
        <br />
        <label>
          Price:
          <input
            name="price"
            type="number"
            value={this.state.price}
            min={0}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default withRouter(DrinkForm);
