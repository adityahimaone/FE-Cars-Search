import { SAVE_CARS_DETAIL } from "redux/types";

export const saveDetailCars = (action) => {
  return (dispatch) => {
    dispatch({
      type: `${SAVE_CARS_DETAIL}_FULFILLED`,
      payload: action,
    });
  };
};
