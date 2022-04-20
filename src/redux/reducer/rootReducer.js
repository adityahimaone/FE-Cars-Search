import { combineReducers } from "redux";
import carsReducer from "./carsReducer";
import searchReducer from "./searchReducer";
import carsDetailReducer from "./carsDetailReducer";

export default combineReducers({
  cars: carsReducer,
  search: searchReducer,
  carsDetail: carsDetailReducer,
});
