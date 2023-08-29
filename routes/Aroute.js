import express from "express";
const router = express.Router();
import { uregister, ulogin, ulogout } from "../controller/Acontrol.js"

// register user
router.post("/register", uregister);

// sigin user
router.post("/login", ulogin)

// logout
router.get("/logout", ulogout);

export default router