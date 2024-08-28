import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,

      //UserInfo
      displayName,
      email,
      photoURL,
      uid,
    };

    /* const credentials = GoogleAuthProvider.credentialFromResult(result);
        console.log(credentials) */
  } catch (error) {
    // Handle Errors here.
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    };
  }
};

export const LoginInWithLoginWithEmailPassword = async ({
  password,
  email,
}) => {
  try {
    const result = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );

    console.log(result);

    const { displayName, photoURL, uid } = result.user;

    return {
      ok: true,
      uid,
      photoURL,
      displayName,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;

    await updateProfile(firebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    console.log(error.message);
    return { ok: false, errorMessage: error.message };
  }
};

export const logoutFirebase = async () => {
  return await firebaseAuth.signOut();
};
