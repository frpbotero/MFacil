import express,{Router}from "express"
import {findAll,findById,create,updateById,deleteByID,} from "./user.controller"

const userRouter = Router()

userRouter.get("/",findAll)
userRouter.get("/:id",findById)
userRouter.post("/",create)
userRouter.put("/:id",updateById)
userRouter.delete("/:id",deleteByID)

export default userRouter