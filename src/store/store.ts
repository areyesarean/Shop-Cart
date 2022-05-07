import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { AuthReducer } from "../reducers/authReducer";
import { ShopReducer } from "../reducers/shopReducer";

const rootReducer = combineReducers({
  shop: ShopReducer,
  auth: AuthReducer
});

export const store = createStore(rootReducer, composeWithDevTools());

store.subscribe(() => console.log(store.getState()))
