import mongoose from "mongoose";
import service from "./user.service"
import bcrypt from "bcrypt"
import User,{Iuser}from "./user.model";
import { Request, Response } from 'express';

import { sign } from 'jsonwebtoken';


interface Irequest{
  params:string, 
  
  body:Iuser
  
 

}

const auth = {  
  expires: '24h',
};


function isObjectIdValid(id:any) {
    return mongoose.Types.ObjectId.isValid(id);
  }

async function findAll(req:Irequest,res:Response){
    const users = await service.findAllUser()
    res.send(users)
}
async function findById(req:Irequest,res:Response){
   
  const id:any = req.params
    if (!isObjectIdValid(id)) {
        return res.status(404).json({ message: "ID inválido!" });
      }
    const user = await service.findByIdUser(id)
    res.send(user)
}
async function findByIdUpdate(req:Irequest,res:Response){
   
  const id:any = req.params
    if (!isObjectIdValid(id)) {
        return res.status(404).json({ message: "ID inválido!" });
      }
    const user = await service.findByIdUserUpdate(id)
    res.send(user)
}


async function create(req:Irequest,res:Response){
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


    const newUser =  new User({
      name:name,
      email:email,
      password: passwordHash,
      createdAt:createdAt,
      
    })


    const user = await service.createUser(newUser)
    res.send(user)
}

  async function login(req:Irequest,res:Response){
    
      try {
            const { email, password:passBody } = req.body;

            if (!email || !passBody) return res.status(400).json({ message: "Erro nos dados!" });

            const user = await User.findOne({ email }).exec();

            console.debug(email)

            if (!user) return res.status(401).json({ message: "Email ou senha incorreto!" })

            await bcrypt.compare(passBody, user.password)

            // if (!isPasswordValid) return res.status(401).json({ message: "A senha inserida não confere!" })

            const secret = process.env.SECRET||"";
            const access_token =  sign(
              {
                
              },
              secret,{
                expiresIn: auth.expires
              }
            );

            res.status(200).json({
                id: user._id,
                access_token: access_token,
            })
            

        } catch (err) {
          console.log(err);

          res.status(500).json({
            message: "Aconteceu algo no servidor, tente novamente mais tarde.",
          });
        }
        
    }
  


 async function updateById(req:Irequest,res:Response){

    const id:any = req.params
    if (!isObjectIdValid(id)) {
        return res.status(404).json({ message: "ID inválido!" });
      }
    const body = req.body
    const user = await service.updateUser(id,body)
    res.send(user)
}
async function deleteByID(req:Irequest,res:Response){
        
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
    login,
    findByIdUpdate
}