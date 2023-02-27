import mongoose from "mongoose";

export interface IComment{
    author:string;
    post:string;
    content:string;
    interactions:Array<string>
}
 const commentSchema = new mongoose.Schema({
    author: { type: String, require: true },
    post: { type: String, require: true },
    content:{ type: String, require: true },
    interactions:{ type: Array },
 })

 export const Comment = mongoose.model("Comment",commentSchema)