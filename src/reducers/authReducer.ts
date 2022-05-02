import { actionAuthTypes } from "../types/actionTypes";
import { Action } from "./shopReducer";

export interface AuthState {
  isLogin: boolean;
  user: string;
}

const localStorageItemName = "isLogin";
const localStorageItemNameUser = "user";

const initialState: AuthState = {
  isLogin: Boolean(localStorage.getItem(localStorageItemName)),
  user: "",
};

export const AuthReducer = (
  state = initialState,
  action: Action
): AuthState => {
  switch (action.type) {
    case actionAuthTypes.INITSTATE: {
      return {
        ...state,
        isLogin: Boolean(localStorage.getItem(localStorageItemName)),
        user: localStorage.getItem(localStorageItemNameUser) || "",
      };
    }

    case actionAuthTypes.LOGIN: {
      localStorage.setItem(localStorageItemName, "true");
      localStorage.setItem(localStorageItemNameUser, action.payload);
      return { ...state, isLogin: true, user: action.payload };
    }

    case actionAuthTypes.LOGOUT: {
      localStorage.removeItem(localStorageItemName);
      localStorage.removeItem(localStorageItemNameUser);
      return { ...state, isLogin: false, user: "" };
    }

    default:
      return state;
  }
};
