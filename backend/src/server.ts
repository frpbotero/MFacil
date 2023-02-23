import express from "express"
import { userRoutes } from "./users/user.router"


const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    return res.json({message:"Hello World!"})
})

app.use("/user",userRoutes)

app.listen(3333,()=>console.log("Server is running"))