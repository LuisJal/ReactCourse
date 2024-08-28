import { createSlice } from "@reduxjs/toolkit";
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", //Autenticado o no autenticado
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
  },
  reducers: {
    login: (state, {payload}) => {
        state.status= "autenticado";//Autenticado o no autenticado
        state.uid= payload.uid;
        state.email= payload.email;
        state.displayName= payload.displayName;
        state.photoURL= payload.photoURL;
        state.errorMessage= null;
    },

    logout: (state,{payload})=>{

        state.status= "not-auth";//Autenticado o no autenticado
        state.uid= null;
        state.email= null;
        state.displayName= null;
        state.photoURL= null;
        state.errorMessage = payload?.errorMessage;
        


    },
    checkingCredentials: (state)=>{
        state.status = 'checking'

    }

  },
});
export const { login,logout,checkingCredentials } = authSlice.actions;
