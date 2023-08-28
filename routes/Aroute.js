import express from "express";
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

// register user

// router.get("/register", async (req, res) => {
//     try {
//         const { username, email, password } = req.body;
        
//     } catch (error) {

//     }

// });
// sigin user

// logout