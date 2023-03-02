import User,{Iuser} from "./user.model"
import mongoose from "mongoose"



function findAllUser(){
    return User.find().select(
        "_id name email profession linkPortfolio"
    )
}
function findByIdUser(id:string){
    const objectId = new mongoose.Types.ObjectId(id)
    return User.find(objectId).select(
        "_id name email profession avatar"
    )
}
function findByIdUserUpdate(id:string){
    const objectId = new mongoose.Types.ObjectId(id)
    return User.find(objectId).select(
        "profession linkPortfolio dateNasc resume"
    )
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
    findByIdUserUpdate
  };