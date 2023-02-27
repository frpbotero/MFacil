import mongoose from "mongoose";
import { Comment, IComment } from "./comments.model";


function findAllComments(){
    return Comment.find()
}
function findByIdComment(id:string){
    const objectId = new mongoose.Types.ObjectId(id)
    return Comment.findById(objectId)
}
function createComment(body:IComment){
    return Comment.create(body)
}
function updateComment(id:string,body:IComment){
    const objectId = new mongoose.Types.ObjectId(id)
    return Comment.findByIdAndUpdate(objectId,body)
}
function deleteComment(id:string){
    const objectId = new mongoose.Types.ObjectId(id)
    return Comment.findByIdAndDelete(objectId)
}

export default{
    findAllComments,
    findByIdComment,
    createComment,
    updateComment,
    deleteComment
}