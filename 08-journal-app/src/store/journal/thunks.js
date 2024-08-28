import { collection, doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../Firebase/config";
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNotes,
  setSaving,
  updateNoteLocal,
} from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());
    const { uid } = getState().auth;
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
      imageUrls: [],
    };
    const newDoc = doc(collection(firebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);
    newNote.id = newDoc.id;
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("EL uid no existe");
    const notas = await loadNotes(uid);
    dispatch(setNotes(notas));
  };
};


/* 0FLDcNznx1O7Dlu4Gh6v */

export const startSavingNote = () => {
  return async (dispatch, getState) => {

    dispatch(setSaving())
    const { uid } = getState().auth;
    const { activeNote } = getState().journal;
    const noteTofirestore = { ...activeNote };
    //ELimino porque no quiero que el id este entre los campos de la nota en si, solo que sea la referencia  a la nota
    delete noteTofirestore.id;
    const docRef = doc(firebaseDB, `${uid}/journal/notes/${activeNote.id}`);
    await setDoc(docRef, noteTofirestore, { merge: true });
    dispatch(updateNoteLocal(activeNote))

  };
};




//thuunk para subir fotossss


export const startUploadingfiles = (files = [])=>{
  return async (dispatch)=>{
    dispatch(setSaving());
    const fileUploadPromises =[];
    for (const file of files) {
      fileUploadPromises.push(fileUpload(file))
    }
    const photosUrls = await Promise.all(fileUploadPromises);
    dispatch(setPhotosToActiveNotes(photosUrls));
  }

}
