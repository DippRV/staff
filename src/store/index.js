import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import staffReducer from "./reducers/staffReducer";

const rootReducer = combineReducers({staff: staffReducer})
export const store = createStore(rootReducer, applyMiddleware(thunk))