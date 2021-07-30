import {createStore, combineReducers} from "redux";
import staffReducer from "./reducers/staffReducer";

const rootReducer = combineReducers({staff: staffReducer})
export const store = createStore(rootReducer)