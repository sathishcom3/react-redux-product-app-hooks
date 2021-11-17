import * as types from "./actionTypes";

export default function productReducer(state = [], action) {
  switch (action.type) {
    case types.ADDPRODUCT:
      return [...state, { ...action.product }];
    default:
      return state;
  }
}