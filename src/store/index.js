import {createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import staffReducer from "./reducers/staffReducer";

const rootReducer = combineReducers({staff: staffReducer})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))