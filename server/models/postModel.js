const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    likes: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    content: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    image: Array,
    comments: [{ type: mongoose.Types.ObjectId, ref: 'comment' }],
    user: {type: mongoose.Types.ObjectId, ref: 'user'}
}, {
    timestamps: true
})

module.exports = mongoose.model('post', postSchema)