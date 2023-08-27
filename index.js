import 'dotenv/config'
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Blog from "./models/Blog.js"
import cors from "cors"

const app = express();
const DB = process.env.DB;
const PORT = process.env.PORT
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(DB, { useNewUrlParser: true,useUnifiedTopology: true}).then(() => {
    console.log('database connected');
}).catch(err => {
    console.log(err);
});

app.use(cors())

app.use(express.json());
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
app.post('/api/blog', async(req, res) => {
    try {
        const head = req.body.head;
        const body = req.body.body;
        const id=new mongoose.mongo.ObjectId();
        // Create a new item using the model
        const newItem = new Blog({
          head:head,
          body:body,
          author:id
        });
        // Save the new item to the database
        await newItem.save();
        res.json({ message: 'Item created successfully' });
      } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
        console.log("error found");
      }

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
app.delete('/api/blog/:id', async(req, res) => {
    try {
        const itemId = req.params.id;
    
        // Use the model to find and remove the item by its ID
        const deletedItem = await Blog.findByIdAndDelete(itemId);
    
        if (!deletedItem) {
          return res.status(404).json({ message: 'Item not found' });
        }
    
        res.json({ message: 'Item deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
      }

})

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
})

