import * as types from './actionTypes';

export function addContact(contact) {
  return { type: types.ADD_CONTACT, payload: contact };
}

export function deleteContact(contact, index) {
  return { type: types.DELETE_CONTACT, payload: { contact, index } };
}

export function resetNewContact() {
  return async (dispacth, getState) => {
    console.log('state ', getState());
    dispacth({ type: types.RESET_CONTACT });
  };
}
