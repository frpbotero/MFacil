import { useEffect, useState } from "react";
import * as S from "./styles";
import { Comments } from "../Comments/Comments";
import trash from "../../assets/trash.svg"
import { apiService } from "../../api/api";
import { Tuser,Tcomment } from "../../types/types";
import person from "../../assets/person2.svg"
import getImageByKey from "../../utils/getImageByKey";

interface Icomment{
    _id:string;
    author:string;
    post:string;
    content:string;
    interactions:Array<string>
}

const getdate:any = localStorage.getItem("user")

export function Post({author,content,idPost,refreshPost}:any) {
    const userLocal = JSON.parse(getdate)
   
    const [contentComment, setcontentComment] = useState('')
    const [replie, setReplie] = useState(false)
    const [viewComment, setViewComment] = useState(false)
    
    const [user,setUser] = useState<[Tuser]>()
    const [listComment,setListComment]=useState<Icomment[]>([])

    function handleReplie() {
        setReplie(!replie)
    }
    function handleViewComment() {
        
        setViewComment(!viewComment)
    }

    
    async function deletePost(){
        if(author==userLocal.id){

            const request= await apiService.post.deleteURL(idPost)

            if (request.status == 200) {
                alert("Item excluído com sucesso! ");
              } else {
                alert("Algo aconteceu de errado, item não excluído.");
              }
              refreshPost()
              //Preciso incluir o deleteComments desse post
        }else{
            alert("Você não tem permissão para excluir esse post! ")
        }
    }

    async function getUser(){
        await apiService.user.readByIdURL(author)
        .then((response:any)=>{
            const data = response.data
           
            setUser(data)
        })
        .catch((e:Error)=>{
            console.log(e)
        })
    }
    
    async function getComments(){
        function verify(value:any){
            if(value.post==idPost){
                return value
            }
        }
        
        await apiService.comment.readAllURL()
        .then((response:any)=>{
            const data = response.data

            const result = data.filter(verify)

            console.log(result)

            setListComment(result)

        })
    }
    
    async function createComment(event:any){
        event.preventDefault()
        const payload = {
            author: userLocal.id, // usuario logado
            post:idPost,
            content:contentComment,
            interactions:[]
        }
        const request = await apiService.comment.createURL(payload)
        
        console.log(request)
        if (request.status == 200) {
            alert("Comentário realizado com sucesso! ");
          } else {
            alert("Algo aconteceu de errado, comentário não realizado.");
          }

          setReplie(!replie)
          getComments()

        
    }


    useEffect(()=>{
        getUser()
        getComments()
        
        
    },[])
    
    return (
        <S.Container>
            <S.Post>
                <div>
                    <S.Content>
                        <S.Header>
                            <div>
                                {
                                    !user?"":
                                    user.map((user:any,index:any)=>(
                                        <div key={`${user.id}${index}`} >
                                    <S.User  src={!user.avatar?person:getImageByKey(user.avatar)} alt={user.name.split(' ').slice(0,1)} />
                                    <h3>{user.name.split(' ').slice(0,1)}</h3>
                                    <p>{user.profession}</p>
                                    </div>))
                                }
                            
                            </div>
                            <button onClick={deletePost}><img className="trash"src={trash} alt="" /></button>
                        </S.Header>
                       {content}
                    </S.Content>
                    <S.Footer>
                        {/* <div>
                            <p>Gostei ({like})</p> 
                        </div> */}
                        <div>
                            {/* <button onClick={e => setLike(like + 1)}>Gostei</button> */}
                            <span><button onClick={handleViewComment}>Comentários ({listComment.length})</button></span><button onClick={handleReplie}>Responder</button>
                        </div>

                        <S.spaceResponse>
                            {replie ? <form onSubmit={createComment}>
                                <textarea name="" id="contentComments" onChange={e => setcontentComment(e.target.value)} />
                                {contentComment !== "" ? <div><button>Enviar</button></div> : ""}
                            </form> : ""}

                        </S.spaceResponse>


                    </S.Footer>

                </div>



            </S.Post>
            {viewComment ? <S.sectionComments> 
                {/* se tiver comentario aparece senao fica um <></> */}

                {listComment.map((comment:Icomment,index:number)=>(
                    <Comments key={index}  author={comment.author} content={comment.content} interactions={comment.interactions} _id={comment._id} refreshComment={getComments}/>
                ))} 
                
                
            </S.sectionComments> : ""}


        </S.Container>
    )
}