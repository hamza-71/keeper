import React from "react";
import axios from "axios";

function Note({ title, content, setNoteList, ID ,setCurrentID}) {
  const deleteNote = (id) => {
    axios
      .delete(`http://localhost:8000/${id}`)
      .then((res) => {
        setNoteList((prevNoteList) => {
          return prevNoteList.filter((note) => {
            return note._id !== id;
          });
        });
      })
      .catch((err) => console.log(err));
  };

function UpdateNote(id){
  setCurrentID(id)
}


  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => deleteNote(ID)}>DELETE</button>
      <button onClick={() => UpdateNote(ID)}>UPDATE</button>
    </div>
  );
}

export default Note;
