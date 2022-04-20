import { SAVE_SEARCH } from "redux/types";

export const saveSearch = (action) => {
  return (dispatch) => {
    dispatch({
      type: `${SAVE_SEARCH}_FULFILLED`,
      payload: action,
    });
  };
};
