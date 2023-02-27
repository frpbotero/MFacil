import mongoose from "mongoose";

export interface IPost{
    author:String;
    content:String;
    comments:String;
    interactions:Array<String>

}

const postSchemna = new mongoose.Schema({
    author: { type: String, require: true },
    content:{ type: String, require: true },
    comments:{ type: Array, require: true },
    interactions:{ type: Array, require: true },
})

export const Post = mongoose.model("User",postSchemna)

