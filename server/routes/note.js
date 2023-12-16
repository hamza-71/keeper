import  express  from "express"
import { createNote, deleteNote, fetchNotes, putNote, } from "../controllers/note.js"
import verifyToken from "../middleware/verifytoken.js"
const router =express.Router()

router.post("/add",verifyToken,createNote)
router.get("/",fetchNotes)
router.get("/:id")
router.delete("/:id",verifyToken,deleteNote)
router.put("/:id",verifyToken,putNote)
export default router