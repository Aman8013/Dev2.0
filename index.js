import 'dotenv/config'
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"

// create a middleware isAuthenticated that checks whether a User is logged in before entering using certain endpoints

//route import
import Broute from "./routes/Broute.js"
import Aroute from "./routes/Aroute.js"

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
app.use("/api/user", Aroute);


app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
})

