import mongoose, { Schema, Types } from "mongoose";

export interface IPost{
    author:String;
    content:String;
    comment?:Array<Types.ObjectId>

}

const postSchemna = new mongoose.Schema({
    author: { 
        type: String, 
        require: true 
    },
    content:{ 
        type: String, 
        require: true 
    },
    comment:[{ 
        type: Schema.Types.ObjectId,  
        ref:"Comment"
    }],
})

export const Post = mongoose.model("Post",postSchemna)

