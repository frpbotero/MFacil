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
function createUser(user:Iuser){
    return User.create(user)
}
function updateUser(id:string,user:Iuser){
    const objectId = new mongoose.Types.ObjectId(id)
    return User.findByIdAndUpdate(objectId,user)
}
function deleteUser(id:string){
    const objectId = new mongoose.Types.ObjectId(id)
    return User.findByIdAndDelete(objectId)
}
module.exports = {
    findAllUser,
    findByIdUser,
    createUser,
    updateUser,
    deleteUser
}