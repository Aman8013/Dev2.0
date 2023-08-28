import express from "express";
const router = express.Router();
import { getAllBlogs, newBlog, getBlog, deleteBlog, editBlog } from "../controller/Bcontrol"

//get all blogs
router.get("/", getAllBlogs);

//new blog  created
router.post("/", newBlog);

//get any blog by id
router.get("/:id", getBlog);

//update or edit blog
router.patch("/:id", editBlog);

//delete blog
router.delete("/:id", deleteBlog);

export default router