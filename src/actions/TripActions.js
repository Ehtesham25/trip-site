import * as api from "../endpoint/index";

import { tripsActionType, loadingActionType } from "../actionTypes/ActionTypes";

export const createTrip = (tripData) => async (dispatch) => {
  try {
    dispatch({ type: loadingActionType.Loading_Start });
    const data = await api.createATrip(tripData);
    dispatch({ type: tripsActionType.CREATE_TRIP, payload: data });
    dispatch({ type: loadingActionType.Loading_End });
  } catch (error) {
    console.log("error while create trip from frontEnd", error);
  }
};

export const getAllTrips = () => async (dispatch) => {
  try {
    dispatch({ type: loadingActionType.Loading_Start });
    const { data } = await api.getAllTripss();
    dispatch({ type: tripsActionType.GET_ALL_TRIP, payload: data });
    dispatch({ type: loadingActionType.Loading_End });
  } catch (error) {
    console.log("error while get trips from frontEnd", error);
  }
};
export const updateTrip = (tripId, postData) => async (dispatch) => {
  try {
    dispatch({ type: loadingActionType.Loading_Start });
    const data = await api.updateTrip(tripId, postData);
    dispatch({ type: tripsActionType.UPDATE_TRIP, payload: data });
    dispatch({ type: loadingActionType.Loading_End });
  } catch (error) {
    console.log("error from front end to update", error);
  }
};

export const deleteTrip = (id) => async (dispatch) => {
  try {
    dispatch({ type: loadingActionType.Loading_Start });
    const data = await api.deleteTrip(id);
    dispatch({ type: tripsActionType.DELETE_TRIP, payload: data });
    dispatch({ type: loadingActionType.Loading_End });
  } catch (error) {
    console.log("error from front end to delete", error);
  }
};
