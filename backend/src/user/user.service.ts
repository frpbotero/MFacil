import {Iuser, User} from "./user.model"
import mongoose from "mongoose"



function findAllUser(){
    return User.find().select(
        "_id name email profession"
    )
}
function findByIdUser(id:string){
    const objectId = new mongoose.Types.ObjectId(id)
    return User.find(objectId)
}
function createUser(body:Iuser){
    return User.create(body)
}
function updateUser(id:string,body:Iuser){
    const objectId = new mongoose.Types.ObjectId(id)
    return User.findByIdAndUpdate(objectId,body)
}
function deleteUser(id:string){
    const objectId = new mongoose.Types.ObjectId(id)
    return User.findByIdAndDelete(objectId)
}


export default {
    findAllUser,
    findByIdUser,
    createUser,
    updateUser,
    deleteUser,
  };