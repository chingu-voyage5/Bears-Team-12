import { combineReducers } from 'redux';
import { ItemFormReducer } from './ItemForm';
import { MenuReducer } from './Menu';
import { OrderReducer } from './order';

export default combineReducers({
  ItemFormReducer,
  Menu: MenuReducer,
  Order: OrderReducer
});
