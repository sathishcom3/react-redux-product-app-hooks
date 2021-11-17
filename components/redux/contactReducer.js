import * as types from './actionTypes';

let defaultState = {
  newContact: [
    { num: 1, name: 'Name 1' },
    { num: 2, name: 'Name 2' },
  ],
  oldContact: [
    { oldNum: 1, oldName: 'Name 1' },
    { oldNum: 2, oldName: 'Name 2' },
  ],
};
export default function contactReducer(state = defaultState, action) {
  let newState = {};
  switch (action.type) {
    case types.ADD_CONTACT:
      newState = {
        ...state,
        newContact: [...state.newContact, action.payload],
      };
      return newState;
    case types.DELETE_CONTACT:
      let {
        payload: { index },
      } = action;
      let newContactDeepCopy = JSON.parse(JSON.stringify(state.newContact));
      newContactDeepCopy.splice(index, 1);
      newState = {
        ...state,
        newContact: [...newContactDeepCopy],
      };
      return newState;

    case types.RESET_CONTACT:
      return defaultState;

    default:
      return state;
  }
}
