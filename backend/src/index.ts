import express from "express";
import cors from "cors";
import helmet from "helmet"; //

import "dotenv/config"
import { connect } from 'mongoose';
import userRoutes from "./user/user.route"
import postRoutes from "./post/post.route"
import commentRoutes from "./comment/comment.route"
import {connectToDataBase} from "./db/db.helpers"

const PORT = process.env.PORT || process.env.LOCAL_PORT
const app = express();


async function main(){

    await connectToDataBase()

    

    app.use(cors())
    app.use(express.json())
    app.use(helmet())

    app.use("/user",userRoutes)
    app.use("/post",postRoutes)
    app.use("/comment",commentRoutes)


}
main()

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))