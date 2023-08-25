import mongoose from "mongoose"

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },
    blogs: [{
        type: mongoose.Types.ObjectId,
        ref: 'Blog'
    }],

    isAdmin: {
        type: Boolean,
        default: false
    },

    // liked: [{
    //     type: mongoose.Types.ObjectId,
    //     ref: 'Blog'
    // }]
});

module.exports = mongoose.model('User', UserSchema);