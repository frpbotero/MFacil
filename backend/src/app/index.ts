import express from "express";
import cors from "cors";
import helmet from "helmet"; //


const app = express();


 app.use(cors())
 app.use(express.json())
 app.use(helmet())


 export default app