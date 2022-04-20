import { SAVE_SEARCH } from "redux/types";

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const searchReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case `${SAVE_SEARCH}_FULFILLED`:
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

export default searchReducer;
