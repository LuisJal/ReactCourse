import { IconButton } from "@mui/material";
import { JournaLayout } from "../layout/JournaLayout";
import { NoteView, NothingSelectedView } from "../view";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
  return (
    <JournaLayout>
      {/* <NothingSelectedView/> */}
      <NoteView/>
     <IconButton
     size="large"
     sx={{
      color:'white',
      backgroundColor:'error.main', ':hover':{backgroundColor:'error.main', opacity:0.9},
      position:'fixed',
      right:50,
      bottom:50
     }}
     >
      <AddOutlined sx={{fontSize:30}}/>

     </IconButton>
    </JournaLayout>
  );
};
