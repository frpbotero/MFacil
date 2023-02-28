import mongoose from "mongoose";
import service from "./user.service"

function isObjectIdValid(id:any) {
    return mongoose.Types.ObjectId.isValid(id);
  }

async function findAll(req,res){
    const users = await service.findAllUser()
    res.send(users)
}
async function findById(req,res){
   
    const id = req.params
    if (!isObjectIdValid(id)) {
        return res.status(404).json({ message: "ID inválido!" });
      }
    const user = await service.findByIdUser(id)
    res.send(user)
}
async function create(req,res){
    const body = req.body
    const user = await service.createUser(body)
    res.send(user)
}
 async function updateById(req,res){

    const id = req.params
    if (!isObjectIdValid(id)) {
        return res.status(404).json({ message: "ID inválido!" });
      }
    const body = req.body
    const user = await service.updateUser(id,body)
    res.send(user)
}
async function deleteByID(req,res){
        
    const id = req.params
    if (!isObjectIdValid(id)) {
        return res.status(404).json({ message: "ID inválido!" });
      }
    await service.deleteUser(id)
    res.send({message:"User deleted"})
}
export default {
    findAll,
    findById,
    create,
    updateById,
    deleteByID,
}