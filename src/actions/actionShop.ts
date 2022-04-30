import { actionTypes } from "../types/actionTypes";

export const addToCart = (id: number) => ({
  type: actionTypes.ADDCART,
  payload: id,
});

export const delFromCart = (id: number, all: boolean = false) =>
  all
    ? { type: actionTypes.REMOVEALLCART, payload: id }
    : { type: actionTypes.REMOVECART, payload: id };

export const clearCart = () => ({ type: actionTypes.CLEARCART });
