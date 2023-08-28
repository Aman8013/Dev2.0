
import Blog from "../models/Blog.js"
//controller function to get all blogs
const getAllBlogs = async (req, res) =>{
     try {  
            // Use the model to find all items
        const items = await Blog.find()
        res.json(items);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
};

//controller function to create blog 

const newBlog = async (req, res) => {
    try {
        const head = req.body.head;
        const body = req.body.body;
        const id = new mongoose.mongo.ObjectId();
        // Create a new item using the model
        const newItem = new Blog({
            head: head,
            body: body,
            author: id
        });
        // Save the new item to the database
        await newItem.save();
        res.json({ message: 'Item created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
        console.log("error found");
    }
}

//controller function to get any blog by id
const getBlog = async (req, res) => {
    try {
        const itemId = req.params.id;
        const foundItem = await Blog.findById(itemId);

        if (!foundItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        return res.status(200).json(foundItem);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }

}

//controller function to update or edit blog

const editBlog=async (req, res) => {
    try {
        const itemId = req.params.id;
        const updateFields = req.body; // Assuming the request body contains fields to update

        const updatedItem = await Blog.findByIdAndUpdate(itemId, updateFields, {
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
}

//controller function to delete blog

const deleteBlog=async (req, res) => {
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
}
export {getAllBlogs, newBlog, getBlog, deleteBlog, editBlog };