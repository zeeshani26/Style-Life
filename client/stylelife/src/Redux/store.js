import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import AdminReducer from "./Admin/AdminReducer";
import { prodReducer } from "./products/ProdReducer";

const rootReducer = combineReducers({
  prodManager: prodReducer,
  admin:AdminReducer
});

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composer(applyMiddleware(thunk))
);
