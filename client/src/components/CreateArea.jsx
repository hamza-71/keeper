import React, { useState } from "react";
import axios from "axios";
function CreateArea({ setNoteList, currentID }) {
  const user = JSON.parse(localStorage.getItem("user"));

  const [note, setNote] = useState({ Title: "", Content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/add", {...note,name:user.result.username}, {
        headers: {
          token: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setNoteList((prevNoteList) => {
          return [...prevNoteList, res.data];
        });
        setNote({
          Title: "",
          Content: "",
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={note.Title}
          name="Title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={note.Content}
          name="Content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
