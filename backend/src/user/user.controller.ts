import mongoose from "mongoose";
import service from "./user.service"
import bcrypt from "bcrypt"
import User,{Iuser}from "./user.model";
import { Request, Response } from 'express';

import { sign } from 'jsonwebtoken';


const auth = {  
  expires: '24h',
};


function isObjectIdValid(id:any) {
    return mongoose.Types.ObjectId.isValid(id);
  }

async function findAll(req:Request,res:Response){
    const users = await service.findAllUser()
    res.send(users)
}
async function findById(req:Request,res:Response){
   
  const id:any = req.params
    if (!isObjectIdValid(id)) {
        return res.status(404).json({ message: "ID inválido!" });
      }
    const user = await service.findByIdUser(id)
    res.send(user)
}
async function create(req:Request,res:Response){
    const {name,email,password,confirmPassword,createdAt} = req.body

    const users = await service.findAllUser()

    if(!name){
      return res.status(422).json({
        message: "Favor inserir nome!",
      });
    }
    if (!email) {
      return res.status(422).json({
        message: "Favor inserir o email!",
      });
    }

    const checkEmail = users.some((user) => user.email === email)
    if (checkEmail) {
      return res.status(422).json({
        message: "Email já cadastrado!",
      });
    }
    if (!password) {
      return res.status(422).json({
        message: "Favor inserir a senha!",
      });
    }
    if (password != confirmPassword) {
      return res.status(422).json({
        message: "Senhas não coicidem!",
      });
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = await new User({
      name:name,
      email:email,
      password: passwordHash,
      createdAt:createdAt,
      
    })


    const user = await service.createUser(newUser)
    res.send(user)
}

  async function login(req:Request,res:Response){
      try {
            const { email, password } = req.body;

            if (!email || !password) return res.status(400).json({ message: "Missing Data" });

            const user = await User.findOne({ email }).exec();

            if (!user) return res.status(401).json({ message: "Email or Password is Wrong!" })

            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) return res.status(401).json({ message: "Email or Password is Wrong!" })

            const secret = process.env.SECRET;
            const access_token = await sign(
              {
                id: user._id
              },
              secret,{
                expiresIn: auth.expires
              }
            );

            return res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                access_token: access_token,
            });

        } catch (err) {
            return res.status(500).json({ message: "Internal Server Error" })
        }
    }
  


 async function updateById(req:Request,res:Response){

    const id:any = req.params
    if (!isObjectIdValid(id)) {
        return res.status(404).json({ message: "ID inválido!" });
      }
    const body = req.body
    const user = await service.updateUser(id,body)
    res.send(user)
}
async function deleteByID(req:Request,res:Response){
        
  const id:any = req.params
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
    login
}