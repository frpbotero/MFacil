import mongoose from "mongoose";

export interface Comment{
    author:string;
    content:string;
    interactions:Array<string>
}
 const commentSchema = new mongoose.Schema({
    author: { type: String, require: true },
    content:{ type: String, require: true },
    interactions:{ type: Array },
 })

 export const Comment = mongoose.model("Comment",commentSchema)