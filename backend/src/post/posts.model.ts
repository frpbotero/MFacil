import mongoose from "mongoose";

export interface IPost{
    author:String;
    content:String;
    interactions?:Array<String>

}

const postSchemna = new mongoose.Schema({
    author: { type: String, require: true },
    content:{ type: String, require: true },
    interactions:{ type: Array },
})

export const Post = mongoose.model("Post",postSchemna)

