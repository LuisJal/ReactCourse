import { types } from "../types/types";

/* const initialState = {
  logged: false,
}; */
export const authReducer = (state ={}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state, //Si tuviese mas cosas en el state me conviene mantener el stado anterior y solo modificar lo nuevo
        logged: true,
        user: action.payload,
      };
    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
