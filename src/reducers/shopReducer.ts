import { actionTypes } from "../types/actionTypes";

export interface Action {
  type: string;
  payload: any;
}

export interface Producto{
  id: number;
  name: string;
  price: number;
  cantStock: number;
}

export interface State {
  products: Producto[],
  cart: []
}

const initialState: State = {
  products: [
    { id: 1, name: "Producto 1", price: 0.99, cantStock: 4 },
    { id: 2, name: "Producto 2", price: 1.99, cantStock: 4 },
    { id: 3, name: "Producto 3", price: 100, cantStock: 4 },
    { id: 4, name: "Producto 4", price: 99.99, cantStock: 4 },
    { id: 5, name: "Producto 5", price: 39.99, cantStock: 4},
    { id: 6, name: "Producto 6", price: 9.99, cantStock: 4 },
    { id: 7, name: "Producto 7", price: 100, cantStock: 4 },
  ],
  cart: [],
};

export const ShopReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.ADDCART:
      return { ...state, products: [...state.products, action.payload] };
    default:
      return state;
  }
};
