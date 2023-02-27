import app from "./app"
import cors from "cors";
import helmet from "helmet"; //
import "dotenv/config"


const PORT = process.env.PORT || process.env.LOCAL_PORT

app.use(helmet())
app.use(cors())



app.get("/",(req,res)=>{
    return res.json({message:"Hello World!"})
})



app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))