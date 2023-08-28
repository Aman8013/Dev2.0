import 'dotenv/config'
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Blog from "./models/Blog.js"
import cors from "cors"

//route import
import Broute from "./routes/Broute.js"

const app = express();
const DB = process.env.DB;
const PORT = process.env.PORT
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('database connected');
}).catch(err => {
    console.log(err);
});

app.use(cors())
app.use(express.json());



app.use('/api/blog', Broute);



app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
})

