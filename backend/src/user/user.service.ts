import {Iuser, User} from "./user.model"
import mongoose from "mongoose"



export function findAllUser(){
    return User.find().select(
        "_id name email profession"
    )
}
export function findByIdUser(id:string){
    const objectId = new mongoose.Types.ObjectId(id)
    return User.find(objectId)
}
export function createUser(body:Iuser){
    return User.create(body)
}
export function updateUser(id:string,body:Iuser){
    const objectId = new mongoose.Types.ObjectId(id)
    return User.findByIdAndUpdate(objectId,body)
}
export function deleteUser(id:string){
    const objectId = new mongoose.Types.ObjectId(id)
    return User.findByIdAndDelete(objectId)
}
