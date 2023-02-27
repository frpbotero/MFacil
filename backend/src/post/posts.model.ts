import mongoose from "mongoose";


const postSchemna = new mongoose.Schema({
    author: { type: String, require: true },
    content:{ type: String, require: true },
    comments:{ type: Array, require: true },
    interactions:{ type: Array, require: true },
})

const Post = mongoose.model("User",postSchemna)

module.exports(Post)
