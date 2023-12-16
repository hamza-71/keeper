import Note from "../models/note.js";

export const createNote = async (req, res) => {
  const newNote = new Note(req.body);
  try {
    const addedNote = await newNote.save();
    res.status(201).json(addedNote);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const fetchNotes = async (req, res) => {
  try {
    const allNote = await Note.find();
    res.status(200).json(allNote);
  } catch (err) {
    res.status(500).send(err);
  }
};
export const fetchNote = async (req, res) => {
  try {
    const allNote = await Note.findById();
    res.status(200).json(allNote);
  } catch (err) {
    res.status(500).send(err);
  }
};
export const putNote = async (req, res) => {
  try {
    const updateNote = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateNote);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted successfuly");
  } catch (err) {
    res.status(500).send(err);
  }
};
