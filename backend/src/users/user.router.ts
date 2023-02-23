import { Router } from "express";
import { User } from "./User";

export const userRoutes = Router()

const users:User[] = []



userRoutes.post("/",(req,res)=>{
    const {name,profission,dateNas,resume,linkPortfolio,createdAt} = req.body

    const user:User = {name,profission,dateNas,resume,linkPortfolio,createdAt:new Date()}

    users.push(user)
    res.status(201).send({users})
})


