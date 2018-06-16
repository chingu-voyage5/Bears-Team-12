import React, { Component } from 'react';
import PriceUpdateForm from './PriceUpdateForm';

class MenuItem extends Component {
  state = { showPriceEdit: false };

  onEditButtonClick() {
    this.setState({
      showPriceEdit: true
    });
  }

  render() {
    const { item, menuState } = this.props;
    const itemFullName = `${item.name} (${item.type})`;

    if (this.state.showPriceEdit) {
      return (
        <div className="menuItem">
          <PriceUpdateForm
            item={item}
            onCancel={() => this.setState({ showPriceEdit: false })}
          />
        </div>
      );
    }

    return (
      <div className="menuItem">
        <div>
          <br />
          <input
            type="button"
            onClick={() => this.onEditButtonClick()}
            value="Edit Price"
          />
          <label>
            <div>{itemFullName}</div>
            <div>{item.price}</div>

            <input
              name={itemFullName}
              type="number"
              onChange={this.props.handleInputChange}
              min={0}
              value={
                menuState.order[itemFullName]
                  ? menuState.order[itemFullName].count
                  : 0
              }
            />
          </label>

          <br />
        </div>
      </div>
    );
  }
}

export default MenuItem;
