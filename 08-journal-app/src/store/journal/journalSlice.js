import { createSlice } from "@reduxjs/toolkit";
export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    savedMessage: "",
    notes: [],
    activeNote: null,
    /*  active:{
        id:'123445',
        title:'',
        body:'',
        date:'',
        imageUrls:[],
      } */
  },
  reducers: {

    savingNewNote: (state)=>{
        state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
        state.notes.push(action.payload);
        state.isSaving = false;

    },
    setActiveNote: (state, action) => {
        state.activeNote = action.payload;
        state.savedMessage = ''

    },
    setNotes: (state, action) => {
        state.notes = action.payload

    },
    setSaving: (state, action) => {
        state.isSaving = true;
        state.savedMessage = ''
    },
    updateNoteLocal: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map(nota =>{
        if(nota.id === action.payload.id){
          return action.payload
        }
        return nota
      })

      state.savedMessage = `${action.payload.title}, actualizada correctamente`

    },
    setPhotosToActiveNotes:(state,action)=>{
      state.activeNote.imageUrls = [...state.activeNote.imageUrls, ...action.payload]; //Preservo las anteriores , append las nuevas
      state.isSaving = false; 
    },
    deleteNoteById: (state, action) => {

    },
  },
});
export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNoteLocal,
  deleteNoteById,
  savingNewNote,
  setPhotosToActiveNotes
} = journalSlice.actions;
