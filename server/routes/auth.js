import express from "express";
import { register ,SignIn} from "../controllers/auth.js";

const router=express.Router();
router.post("/register",register);
router.post("/login",SignIn);
export default router;