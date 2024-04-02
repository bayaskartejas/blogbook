require('dotenv').config();
const { DB_URL, SECRET_KEY } = process.env;
const mongoose = require("mongoose")
const zod = require("zod")
const secretKey = SECRET_KEY
mongoose.connect(DB_URL)

const inputSchema = zod.object({
    firstName: zod.string(),
    lastName: zod.string(),
    username: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(6),
    day: zod.number(),
    month: zod.number(),
    year: zod.number(),
    gender: zod.string()    
})

const  postSchema = mongoose.Schema({
    blog: String,
    name: String,
    likes: Array,
    comments: Array,
    time: String
})

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    password: String,
    day: Number,
    month: Number,
    year: Number,
    gender: String,  
    savedPosts: Array,
    pfp: String
})

const User = mongoose.model("User", userSchema)
const Post = mongoose.model("Post", postSchema)

module.exports = {
    User,
    inputSchema,
    secretKey,
    Post
}