import service from "./comment.service"
import mongoose from "mongoose";
import { Request, Response } from 'express';
import { IComment } from "./comments.model";

interface Irequest{
  params:string, 
  
  body:IComment
  
 

}


function isObjectIdValid(id:any) {
    return mongoose.Types.ObjectId.isValid(id);
  }
  

async function findAll(req:Request,res:Response){
    const comments = await service.findAllComments()
    res.send(comments)
}
async function findById(req:Irequest,res:Response){
    const id = req.params
    if (!isObjectIdValid(id)) {
        return res.status(404).json({ message: "ID inválido!" });
      }
    const comment = await service.findByIdComment(id)
    res.send(comment)
}
async function create(req:Request,res:Response){
    const body = req.body
    const comment = await service.createComment(body)
    res.send(comment)
}
async function updateById(req:Irequest,res:Response){
    const id = req.params
    if (!isObjectIdValid(id)) {
        return res.status(404).json({ message: "ID inválido!" });
      }
    const body = req.body
    const comment = await service.updateComment(id,body)
    res.send(comment)
}
async function deleteByID(req:Irequest,res:Response){
    const id = req.params
    if (!isObjectIdValid(id)) {
        return res.status(404).json({ message: "ID inválido!" });
      }
    await service.deleteComment(id)
    res.send({message:"Comment deleted"})
}
export default {
    findAll,
    findById,
    create,
    updateById,
    deleteByID,
}