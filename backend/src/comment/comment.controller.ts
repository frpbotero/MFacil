import service from "./comment.service"


async function findAll(req,res){
    const comments = await service.findAllComments()
    res.send(comments)
}
async function findById(req,res){
    const id = req.params
    const comment = await service.findByIdComment(id)
    res.send(comment)
}
async function create(req,res){
    const body = req.body
    const comment = await service.createComment(body)
    res.send(comment)
}
async function updateById(req,res){
    const id = req.params
    const body = req.body
    const comment = await service.updateComment(id,body)
    res.send(comment)
}
async function deleteByID(req,res){
    const id = req.params
    await service.deleteComment(id)
    res.send({message:"Comment deleted"})
}
export default {
    findAll,
    findById,
    create,
    updateById,
    deleteByID,
}