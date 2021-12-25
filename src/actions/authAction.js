import { getId } from "../actionTypes/ActionTypes";

export const dispatchId = (id) => async (dispatch) => {
  try {
    dispatch({ type: getId.GET_ID, payload: id });
  } catch (error) {
    console.log("Error while get id", error);
  }
};
