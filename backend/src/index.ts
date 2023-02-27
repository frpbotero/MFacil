import express from "express";
import cors from "cors";
import helmet from "helmet"; //

import "dotenv/config"
import { connect } from 'mongoose';
import userRoutes from "./user/user.route"
import postRoutes from "./post/post.route"



const PORT = process.env.PORT || process.env.LOCAL_PORT
const URI = process.env.URI

const app = express();

async function main(){
    await connect(URI)


    app.use(cors())
    app.use(express.json())
    app.use(helmet())

    app.use("/user",userRoutes)
    app.use("/post",postRoutes)


}
main()

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))