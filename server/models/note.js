import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  creator:String,
  name:String,
  Title: String,
  Content: String,
});
const Note = new mongoose.model("Note", NoteSchema);
export default Note;
