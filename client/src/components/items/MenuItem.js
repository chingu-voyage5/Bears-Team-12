// Wrote code to render a MenuItem for each item in the MenuReducer part
// of the application state. The old code is still here and its functionality
// needs to be retained within the application.

import React, { Component } from 'react';
import PriceUpdateForm from './PriceUpdateForm';

// class MenuItem extends Component {
//   state = { showPriceEdit: false };

//   onEditButtonClick() {
//     this.setState({
//       showPriceEdit: true
//     });
//   }

//   render() {
//     const { item, menuState } = this.props;
//     const itemFullName = `${item.name} (${item.type})`;

//     if (this.state.showPriceEdit) {
//       return (
//         <div className="menuItem">
//           <PriceUpdateForm
//             item={item}
//             onCancel={() => this.setState({ showPriceEdit: false })}
//           />
//         </div>
//       );
//     }

//     return (
//       <div className="menuItem">
//         <div>
//           <br />
//           <input
//             type="button"
//             onClick={() => this.onEditButtonClick()}
//             value="Edit Price"
//           />
//           <label>
//             <div>{itemFullName}</div>
//             <div>{item.price}</div>

//             <input
//               name={itemFullName}
//               type="number"
//               onChange={this.props.handleInputChange}
//               min={0}
//               value={
//                 menuState.order[itemFullName]
//                   ? menuState.order[itemFullName].count
//                   : 0
//               }
//             />
//           </label>

//           <br />
//         </div>
//       </div>
//     );
//   }
// }

const MenuItem = props => {
  // const { item, menuState } = this.props;
  // const itemFullName = `${item.name} (${item.type})`;

  return (
    <div className="menu__item">
      <img className="menu__item--img" src="http://via.placeholder.com/250x300" />
      <h3 className="menu__item--name">Chicken with sauce</h3>
      <p className="menu__item--price">&euro; 17</p>
      <button className="menu__item--button">+</button>
    </div>
  );
};

export default MenuItem;
