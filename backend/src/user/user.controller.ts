import mongoose from "mongoose";
import service from "./user.service"
import bcrypt from "bcrypt"
import { Iuser } from "./user.model";

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

    const users = await service.findAllUser()

    if(!body.name){
      return res.status(422).json({
        message: "Favor inserir nome!",
      });
    }
    if (!body.email) {
      return res.status(422).json({
        message: "Favor inserir o email!",
      });
    }

    const checkEmail = users.some((user) => user.email === body.email)
    if (checkEmail) {
      return res.status(422).json({
        message: "Email já cadastrado!",
      });
    }
    if (!body.password) {
      return res.status(422).json({
        message: "Favor inserir a senha!",
      });
    }
    if (body.password != body.confirmPassword) {
      return res.status(422).json({
        message: "Senhas não coicidem!",
      });
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(body.password, salt);

    const newUser:Iuser = {
      name:body.name,
      email:body.email,
      password: passwordHash,
      createdAt:body.createdAt
    }


    const user = await service.createUser(newUser)
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