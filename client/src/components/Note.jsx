import React from "react";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function Note({
  title,
  content,
  setNoteList,
  ID,
  setCurrentID,
  name,
  creator,
}) {
  const user = JSON.parse(localStorage.getItem("user"));
  const deleteNote = (id) => {
    axios
      .delete(`http://localhost:8000/${id}`, {
        headers: {
          token: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setNoteList((prevNoteList) => {
          return prevNoteList.filter((note) => {
            return note._id !== id;
          });
        });
      })
      .catch((err) => console.log(err));
  };

  function UpdateNote(id) {
    setCurrentID(id);
  }

  return (
    <div className="note">
      <h1>{name}</h1>
      <h1>{title}</h1>
      <p>{content}</p>
      {user?.result._id === creator && (
      
        <DeleteIcon style={{color:"red",cursor:"pointer"}} onClick={() => deleteNote(ID)} />
      )}

      {user?.result._id === creator && (
        <EditIcon style={{color:"green",cursor:"pointer"}} onClick={() => UpdateNote(ID)} />

      )}
    </div>
  );
}

export default Note;
