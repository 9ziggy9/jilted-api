import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import members from "./members";

const rootReducer = combineReducers({
  members,
});

const enhancer = applyMiddleware(thunk);

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
