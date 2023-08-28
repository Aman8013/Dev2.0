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

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const foundItem = await Blog.findOne({ email: email });
        const result = await bcrypt.compare(password, foundItem.password, 10);
        if (result) {
            const payload = {
                name: foundItem.name,
                email: foundItem.email,
                id: foundItem._id
            }
            const token = await jwt.sign(payload, process.env.JWTSECRET);
            res.cookie('AUTH', token, { httpOnly: true });
            res.status(200).json({ result: true });
        } else {
            res.status(200).json({ result: false });
        }
    } catch (error) {
        res.status(500).json("internal server error");
    }
})

// logout