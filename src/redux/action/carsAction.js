import { AxiosCustom } from "../../utils/axiosCustom";
import { GET_CARS } from "redux/types";

export const getCars = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_CARS}_LOADING` });

    AxiosCustom.get("/admin/car")
      .then((response) => {
        dispatch({
          type: `${GET_CARS}_FULFILLED`,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${GET_CARS}_ERROR`,
          error: error.message,
        });
      });
  };
};
