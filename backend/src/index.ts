import app from "./app"
import "dotenv/config"
import { connect } from 'mongoose';

const PORT = process.env.PORT || process.env.LOCAL_PORT
const URI = process.env.URI

import express from "express";
import cors from "cors";
import helmet from "helmet"; //
import userRouter  from "user/user.route";


const app = express();




async function main(){
    await connect(URI)
}

app.use(cors())
app.use(express.json())
app.use(helmet())


app.use("/user",userRouter )



main()

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))