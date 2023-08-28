import express from "express";
import 'dotenv/config'
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

// register user

router.post("/register", async (req, res) => {
    try {
        const fname = req.body.fname;
        const email = req.body.email;
        const password = req.body.password;

        if (!(email && password && fname)) {
            res.status(400).send("All input is required");
        }

        const oldUser = await User.findOne({ email: email });

        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }

        const hash = await bcrypt.hash(password, 10);

        // const id=new mongoose.mongo.ObjectId();
        const newuser = new User({
            email: email,
            password: hash,
            name: fname,
        })
        await newuser.save();
        const payload = {
            name: newuser.name,
            email: newuser.email,
            id: newuser._id,
        }
        const token = jwt.sign(payload, process.env.JWTSECRET);
        res.cookie("AUTH", token, { httpOnly: true });
        res.status(200).json({ result: true });

    } catch (error) {
        res.status(500).json({ message: 'An error occurred while registering user.' });
    }

});

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