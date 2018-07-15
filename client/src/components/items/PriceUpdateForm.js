import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class PriceUpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0
    };
  }

  handleInputChange(event) {
    this.setState({ price: event.target.value });
  }

  handleUpdate(event) {
    event.preventDefault();
    axios
      .put(`/api/items/${this.props.item._id}`, {
        newPrice: this.state.price
      })
      .then(() => {
        this.props.history.push('/');
        this.props.history.push('/menu');
      });
  }

  render() {
    return (
      <div>
        <label>
          New Price
          <br />
          <br />
          <input
            type="number"
            value={this.state.price}
            onChange={event => this.handleInputChange(event)}
          />
        </label>
        <br />
        <br />
        <button onClick={this.props.onCancel}>Cancel</button>
        <button onClick={event => this.handleUpdate(event)}>
          Update Price!
        </button>
      </div>
    );
  }
}

export default withRouter(PriceUpdateForm);
