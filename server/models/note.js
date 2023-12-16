import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  Title: String,
  Content: String,
});
const Note = new mongoose.model("Note", NoteSchema);
export default Note;
