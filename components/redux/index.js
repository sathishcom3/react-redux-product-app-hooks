import { combineReducers } from 'redux';
import products from './productReducer';
import contacts from './contactReducer';

const rootReducer = combineReducers({
  products,
  contacts
});

export default rootReducer;
