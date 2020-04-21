import { combineReducers } from "redux";
import motorReducers from "./motorReducers";
import carReducers from "./carReducers";

const Reducer = combineReducers({ motorReducers, carReducers });

export default Reducer;
