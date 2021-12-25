import { getId } from "../actionTypes/ActionTypes";

export default (state = [{ id: [] }], action) => {
  switch (action.type) {
    case getId.GET_ID:
      return [...state, action.payload];
    default:
      return state;
  }
};
