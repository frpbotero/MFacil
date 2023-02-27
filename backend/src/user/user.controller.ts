import {findAllUser,findByIdUser, createUser, updateUser, deleteUser} from "./user.service"

export async function findAll(req,res){
    const users = await findAllUser()
    res.send(users)
}
export async function findById(req,res){
    //criar validação do ID
    const id = req.params
    const user = await findByIdUser(id)
    res.send(user)
}
export async function create(req,res){
    const body = req.body
    const user = await createUser(body)
    res.send(user)
}
export async function updateById(req,res){
        //criar validação do ID
    const id = req.params
    const body = req.body
    const user = await updateUser(id,body)
    res.send(user)
}
export async function deleteByID(req,res){
        //criar validação do ID
    const id = req.params
    await deleteUser(id)
    res.send({message:"User deleted"})
}