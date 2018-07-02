// Component changelog: remove the name input and notes input from
// this component

// TODO: Place name and Notes inputs in the OrderOverview component
// and style

import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import MenuItem from './items/MenuItem';
import OrderOverview from './orders/OrderOverview';
import Redirect from 'react-router-dom/Redirect';

// This Component is named to correspond to the "Menu" link on the
// navbar. It should render all menu items and the orderOverview component
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [], // Lifted into Redux store
      name: '', // don't need
      order: {}, // lift into Redux store
      notes: '', // Move into OrderOverview
      previousOrder: '' // ???
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

  // This method renders a large portion of the page. It consults the store's
  // Menu array, and creates a MenuItem for each object in the array. It then
  // places all of those MenuItems inside of a div with className "foodMenu",
  // which will take up about 75% of the screen and be rendered along side the
  // OrderOverview component.
  renderItems() {
    return (
      <div className="foodMenu">
        {this.props.menu.map(item => {
          return (
            <MenuItem
              key={item.name + item.type}
              item={item.name}
              price={item.price}
              // handleInputChange={this.handleInputChange}
              // menuState={this.state}
            />
          );
        })}
      </div>
    );
  }

  // Render foodMenu and OrderOverview
  // foodMenu should take up whatever is left after Order Overview renders
  // OrderOverview should take up 350px or 35rem
  render() {
    if (this.state.previousOrder._id) {
      return <Redirect to={ '/orders/' + this.state.previousOrder._id } />
    }

    return (
      <div className="mainMenu">
        {this.renderItems()}
        <OrderOverview order={this.state.order} menuState={this.state} />

        {this.state.previousOrder._id && (
          <div className="orderReceipt">
            <OrderReceipt order={this.state.previousOrder} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { menu: state.MenuReducer };
};

export default connect(mapStateToProps)(Menu);
