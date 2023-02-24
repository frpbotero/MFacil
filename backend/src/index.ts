import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();





const app = express();

app.use(helmet())
app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    return res.json({message:"Hello World!"})
})



app.listen(3333,()=>console.log(`Server is running on port 3333`))