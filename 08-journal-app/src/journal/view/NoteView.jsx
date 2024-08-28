import { NoEncryption, Notes, SaveOutlined, UploadOutlined } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo, useRef } from "react";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSavingNote, startUploadingfiles } from "../../store/journal/thunks";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {

  const dispatch = useDispatch();

  const {activeNote,savedMessage,isSaving} = useSelector(state => state.journal);

  const {body,title,date,id,onInputChange,formState}= useForm(activeNote);

  const dateString = useMemo(() => {const newDate = new Date(date);
    return newDate.toUTCString();
   }, [date])

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])



  const fileInputRef = useRef(); //Para simular el click en el input del html que esta en display:none
  
  const onSaveNote = () =>{
    dispatch(startSavingNote())
  }

  useEffect(() => {
    if(savedMessage.length > 0){
      Swal.fire('Nota actualizada', savedMessage, 'success');


    }
  
  }, [savedMessage])



  const onFileInputChange = ({target})=>{
    if(target.files === 0)return;

    console.log('subiendo Archivos')

    dispatch(startUploadingfiles(target.files))

  }
  
   


  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      sx={{ mb: 1 }}
      className="animate__animated animate__fadeIn"
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light" alignItems="center">
          {dateString}
        </Typography>
      </Grid>

      <IconButton onClick={()=>fileInputRef.current.click()} color="primary" disabled={isSaving}>
        <UploadOutlined/>
      </IconButton>
      <input ref={fileInputRef} type="file" multiple onChange={onFileInputChange} style={{display:'none'}}/> 

      <Grid item>
        <Button disabled={isSaving} onClick={onSaveNote} color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label="Título"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="Que sucedió hoy?"
          minRows={5}
          sx={{ border: "none", mb: 1 }}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      <ImageGallery images={activeNote.imageUrls} />
    </Grid>
  );
};
