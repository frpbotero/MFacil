import service from "./user.service"

async function findAll(req,res){
    const users = await service.findAllUser()
    res.send(users)
}
async function findById(req,res){
    //criar validação do ID
    const id = req.params
    const user = await service.findByIdUser(id)
    res.send(user)
}
async function create(req,res){
    const body = req.body
    const user = await service.createUser(body)
    res.send(user)
}
 async function updateById(req,res){
        //criar validação do ID
    const id = req.params
    const body = req.body
    const user = await service.updateUser(id,body)
    res.send(user)
}
async function deleteByID(req,res){
        //criar validação do ID
    const id = req.params
    await service.deleteUser(id)
    res.send({message:"User deleted"})
}
export default {
    findAll,
    findById,
    create,
    updateById,
    deleteByID,
}