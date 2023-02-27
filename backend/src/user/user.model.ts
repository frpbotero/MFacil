import mongoose from "mongoose";

export interface Iuser{
    name:string;
    profession:string;
    dateNasc:string;
    resume:string;
    linkPortfolio:string;
    email:string;
    password:string
    createdAt:Date
}


const userSchema = new mongoose.Schema<Iuser>({
    name: { type: String, require: true },
    profession:{ type: String, require: true },
    dateNasc:{ type: String, require: true },
    resume:{ type: String, require: true },
    linkPortfolio:{ type: String, require: true },
    email:{ type: String, require: true },
    password:{ type: String, require: true }
})

export const User = mongoose.model<Iuser>("User",userSchema)


