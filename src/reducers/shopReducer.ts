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
  cantSelect: number;
}

type ProductoState = Omit<Producto, 'cantSelect'>
type ProductoCart = Partial<Producto>

export interface State {
  products: ProductoState[];
  cart: ProductoCart[];
}

const initialState: State = {
  products: [],
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

    case actionTypes.INITPRODUCT: {
      return { ...state, products: action.payload };
    }
    default:
      return state;
  }
};
