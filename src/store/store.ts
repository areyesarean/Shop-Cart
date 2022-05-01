import { createStore, combineReducers } from "redux";
import { ShopReducer } from "../reducers/shopReducer";

const rootReducer = combineReducers({
  shop: ShopReducer,
});

export const store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState()))
