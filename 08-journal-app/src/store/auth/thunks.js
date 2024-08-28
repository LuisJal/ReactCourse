import { checkingCredentials, login, logout } from "./authSlice";
import {
  LoginInWithLoginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  signInWithGoogle,
} from "../../Firebase/providers";

export const checkingAuth = (email, password) => {
  //LO llamo desde el formulario de Login, donde lo necesito
  return async (dispatch) => {
    dispatch(checkingCredentials()); //Hago el dispatch de la funcion que cambia el status
  };
};

export const startGoogleSignIn = () => {
  //LO llamo desde el formulario de Login, donde lo necesito
  return async (dispatch) => {
    dispatch(checkingCredentials()); //Hago el dispatch de la funcion que cambia el status

    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout())
  };
};

export const starSignInWithEmailAndPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await LoginInWithLoginWithEmailPassword({ email, password });
    console.log(result.errorMessage);
    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });

    if (!result.ok) {
      console.log(result.errorMessage);
      return dispatch(logout(result));
    }
    

    dispatch(login(result));
  };
};
