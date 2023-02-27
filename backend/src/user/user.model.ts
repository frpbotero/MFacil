import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    profession:{ type: String, require: true },
    dateNasc:{ type: String, require: true },
    resume:{ type: String, require: true },
    linkPortfolio:{ type: String, require: true },
    email:{ type: String, require: true },
    password:{ type: String, require: true }
})

const User = mongoose.model("User",userSchema)

module.exports(User)

