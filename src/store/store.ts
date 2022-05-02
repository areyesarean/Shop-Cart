import { createStore, combineReducers } from "redux";
import { AuthReducer } from "../reducers/authReducer";
import { ShopReducer } from "../reducers/shopReducer";

const rootReducer = combineReducers({
  shop: ShopReducer,
  auth: AuthReducer
});

export const store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState()))
