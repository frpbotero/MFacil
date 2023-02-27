import app from "./app"
import "dotenv/config"
import { connect } from 'mongoose';

const PORT = process.env.PORT || process.env.LOCAL_PORT
const URI = process.env.URI
async function main(){
    await connect(URI)
}


main()

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))