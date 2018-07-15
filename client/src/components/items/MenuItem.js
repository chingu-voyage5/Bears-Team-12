// Wrote code to render a MenuItem for each item in the MenuReducer part
// of the application state. The old code is still here and its functionality
// needs to be retained within the application.

// There is Menu editing functionalit was built into this component
// showPriceEdit controlled whether or not the price for an item could
// be edited on the spot to effect future orders. This could be a UI
// element for an admin dashboard, but doesn't seem to serve a typical
// order taker in any way. Removed this component for now and will reuse
// it elsewhere if there is time after MVP is accomplished.
import React, { Component } from 'react';

class MenuItem extends Component {
  constructor(props) {
    super(props);
  }

  addItem() {
    // take the current items properties and add it to the global order object
    // using a ADD_ITEM action. The payload should be the item properties.
  }

  render() {
    return (
      <div className="menu__item">
        <img
          className="menu__item--img"
          src="http://via.placeholder.com/250x300"
        />
        <h3 className="menu__item--name">{this.props.name}</h3>
        <p className="menu__item--price">&euro; {this.props.price}</p>
        <button onClick={this.addItem} className="menu__item--button">
          +
        </button>
      </div>
    );
  }
}

export default MenuItem;
