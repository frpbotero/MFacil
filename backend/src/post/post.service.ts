import mongoose from "mongoose";
import { IPost, Post } from "./posts.model";


function findAllPosts(){
    return Post.find()
}
function findByIdPost(id:string){
    const objectId = new mongoose.Types.ObjectId(id)
    return Post.findById(objectId)
}
function createPost(body:IPost){
    return Post.create(body)
}
function updatePost(id:string,body:IPost){
    const objectId = new mongoose.Types.ObjectId(id)
    return Post.findByIdAndUpdate(objectId,body)
}
function deletePost(id:string){
    const objectId = new mongoose.Types.ObjectId(id)
    return Post.findByIdAndDelete(objectId)
}

export default{
    findAllPosts,
    findByIdPost,
    createPost,
    updatePost,
    deletePost
}