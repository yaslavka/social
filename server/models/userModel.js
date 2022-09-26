const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25
    },
    username: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    gender: {type: String, required: true},
    City: {type: String, required: true},
    Region: {type: String, required: true},
    Age: {type: String, required: true},
    Cel: {type: String, required: true},
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: true,
    },
    avatar:{
        type: String,
        default:''
    },
    coverPicture: String,
    about: String,
    worksAt: String,
    relationship: String,
    role: {type: String, default: 'user'},
    mobile: {type: String, default: ''},
    address: {type: String, default: ''},
    story: {
        type: String,
        default: ''
    },
    website: {type: String, default: ''},
    followers: [{type: mongoose.Types.ObjectId, ref: 'user'}],
    following: [{type: mongoose.Types.ObjectId, ref: 'user'}],
    saved: [{type: mongoose.Types.ObjectId, ref: 'user'}]
}, {
    timestamps: true
})


module.exports = mongoose.model('user', userSchema)