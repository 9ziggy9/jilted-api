import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import members from "./members";
import groups from "./groups";

const rootReducer = combineReducers({
  members,
  groups,
});

const enhancer = applyMiddleware(thunk);

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
