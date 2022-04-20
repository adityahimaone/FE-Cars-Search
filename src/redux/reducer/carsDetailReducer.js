import { SAVE_CARS_DETAIL } from "redux/types";

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const carsDetailReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case `${SAVE_CARS_DETAIL}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default carsDetailReducer;
