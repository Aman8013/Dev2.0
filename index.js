import 'dotenv/config'
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Blog from "./models/Blog.js"

const app = express();
const DB = process.env.DB;
const PORT = process.env.PORT
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(DB, { useNewUrlParser: true }).then(() => {
    console.log('database connected');
}).catch(err => {
    console.log(err);
})


// app.get("/", (req, res) => {
//     res.send('<h1>hi</h1>');
// })

// app.get("/login", (req, res) => {
//     console.log("hiii");
//     res.send('<h1>Hello</h1>');
// })

// app.get("/register", (req, res) => {
//     res.send('<h1>Hello</h1>');
// })


// Blogs end points goes here
// /blog post
app.post('/blog', (req, res) => {
    var blog =new Blog({
        body: req.body.body,
        head: req.body.head
    })
    Blog.insert(blog,function(err){
        if(err){
            console.log(err);
            res.json({result:false});
        }else{
            console.log("Successfully saved");
            res.json({result: true});
        }
    })
    
})
// get all blogs
app.get('/blog', (req, res) => {

})

// /blog/id get
app.get('/blog/:id', (req, res) => {

})

// /blog/id put
app.patch('/blog/:id/edit', (req, res) => {

})

// /blog/id delete
app.delete('/blog/:id', (req, res) => {

})

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
})

