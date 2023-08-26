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
});


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
app.post('/api/blog', (req, res) => {
    var blog = new Blog({
        body: req.body.body,
        head: req.body.head
    })
    Blog.insert(blog, function (err) {
        if (err) {
            console.log(err);
            res.json({ result: false });
        } else {
            console.log("Successfully saved");
            res.json({ result: true });
        }
    })

})
// get all blogs
app.get('/api/blog', (req, res) => {
    Blog.find({}, (err, result) => {
        if (err) {
            console.log(err);
            res.json({});
        } else {
            res.json(result);
        }
    });
})

// /blog/id get
app.get('/api/blog/:id', async (req, res) => {
    try {
        const itemId = parseInt(req.params.id);
        const foundItem = await Item.findById(itemId);

        if (!foundItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        return res.status(200).json(foundItem);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }

})

// /blog/id put
app.patch('/api/blog/:id', async (req, res) => {
    try {
        const itemId = req.params.id;
        const updateFields = req.body; // Assuming the request body contains fields to update

        const updatedItem = await Item.findByIdAndUpdate(itemId, updateFields, {
            new: true, // Return the updated document
        });

        if (!updatedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }

        return res.status(200).json(updatedItem);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
})

// /blog/id delete
app.delete('/api/blog/:id', (req, res) => {

})

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
})

