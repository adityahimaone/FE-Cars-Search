import { GET_CARS } from "redux/types";

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const carsReducer = (state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case `${GET_CARS}_LOADING`:
      return {
        ...state,
      };
    case `${GET_CARS}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_CARS}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default carsReducer;
