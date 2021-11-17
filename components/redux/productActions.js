import * as types from "./actionTypes";

export function addProduct(product) {
  return { type: types.ADDPRODUCT, product };
}

export function deleteProduct(product) {
  return { type: types.DELETEPRODUCT, product };
}
