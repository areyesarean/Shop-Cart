import { actionTypes } from "../types/actionTypes";

export interface Action {
  type: string;
  payload: any;
}

export interface Producto {
  id: number;
  name: string;
  price: number;
  cantStock: number;
}

export interface ProductoCart {
  id: number;
  name: string;
  price: number;
  cantStock: number;
  cantSelect: number;
}

export interface State {
  products: Producto[];
  cart: any[];
}

const initialState: State = {
  products: [
    { id: 1, name: "Producto 1", price: 0.99, cantStock: 10 },
    { id: 2, name: "Producto 2", price: 1.99, cantStock: 4 },
    { id: 3, name: "Producto 3", price: 100, cantStock: 5 },
    { id: 4, name: "Producto 4", price: 99.99, cantStock: 28 },
    { id: 5, name: "Producto 5", price: 39.99, cantStock: 12 },
    { id: 6, name: "Producto 6", price: 9.99, cantStock: 9 },
    { id: 7, name: "Producto 7", price: 100, cantStock: 40 },
  ],
  cart: [],
};

export const ShopReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.ADDCART: {
      const producto = state.products.find(
        (prod) => prod.id === action.payload.id
      );

      const productoCartIndex = state.cart.findIndex(
        (prod) => prod.id === action.payload.id
      );

      if (action.payload.cantSelect === 0 && productoCartIndex !== -1) {
        let cart = [...state.cart];
        cart.splice(productoCartIndex, 1);
        return {
          ...state,
          cart,
        };
      }

      //*Si el producto no existe en el carrito
      if (productoCartIndex === -1) {
        return {
          ...state,
          cart: [
            ...state.cart,
            { ...producto, cantSelect: action.payload.cantSelect },
          ],
        };
      } else {
        let cart = [...state.cart];
        cart[productoCartIndex] = {
          ...producto,
          cantSelect: action.payload.cantSelect,
        };
        return {
          ...state,
          cart,
        };
      }
    }
    default:
      return state;
  }
};
