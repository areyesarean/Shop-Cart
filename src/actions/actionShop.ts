import { actionTypes } from "../types/actionTypes";

export const addToCart = (id: number, cantSelect: number) => ({
  type: actionTypes.ADDCART,
  payload: {id, cantSelect},
});

export const delFromCart = (id: number, all: boolean = false) =>
  all
    ? { type: actionTypes.REMOVEALLCART, payload: id }
    : { type: actionTypes.REMOVECART, payload: id };

export const clearCart = () => ({ type: actionTypes.CLEARCART });


export const initProducts = (products: any[]) => ({
  type: actionTypes.INITPRODUCT,
  payload: products,
});
