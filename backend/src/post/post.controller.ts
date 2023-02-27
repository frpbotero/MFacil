import service from "./post.service"


async function findAll(req,res){
    const posts = await service.findAllPosts()
    res.send(posts)
}
async function findById(req,res){
    const id = req.params
    const post = await service.findByIdPost(id)
    res.send(post)
}
async function create(req,res){
    const body = req.body
    const post = await service.createPost(body)
    res.send(post)
}
async function updateById(req,res){
    const id = req.params
    const body = req.body
    const post = await service.updatePost(id,body)
    res.send(post)
}
async function deleteByID(req,res){
    const id = req.params
    await service.deletePost(id)
    res.send({message:"Post deleted"})
}