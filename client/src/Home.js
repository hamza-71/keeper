import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import axios from "axios";
function Home() {
  const [noteList, setNoteList] = useState([]);
  const [currentID, setCurrentID] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((res) => {
        setNoteList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Header />
      <CreateArea setNoteList={setNoteList} currentID={currentID} />
      {noteList.map((note) => {
        return (
          <Note
            name={note.name}
            key={note._id}
            ID={note._id}
            title={note.Title}
            content={note.Content}
            setNoteList={setNoteList}
            setCurrentID={setCurrentID}
            creator={note.creator}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default Home;
