import { combineReducers } from 'redux';
import { ItemFormReducer } from './ItemForm';
import { MenuReducer } from './Menu';

export default combineReducers({
  ItemFormReducer,
  MenuReducer
});
