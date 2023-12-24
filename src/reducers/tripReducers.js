import { tripsActionType } from "../actionTypes/ActionTypes";

export default (state = [{ trip: [], isLoading: true }], action) => {
  switch (action.type) {
    case tripsActionType.CREATE_TRIP:
      return {...state, action.payload};
    case tripsActionType.GET_ALL_TRIP:
      return action.payload;
    case tripsActionType.UPDATE_TRIP:
      return state.map((singleTrip) =>
        singleTrip?._id === action?.payload?._id ? action.payload : state
      );
    case tripsActionType.DELETE_TRIP:
      return state.filter(
        (deletetrip) => deletetrip?._id !== action?.payload?._id
      );

    default:
      return state;
  }
};
