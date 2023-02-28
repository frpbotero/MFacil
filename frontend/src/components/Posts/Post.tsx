import { useEffect, useState } from "react";
import * as S from "./styles";
import { Comments } from "../Comments/Comments";
import trash from "../../assets/trash.svg"
import { apiService } from "../../api/api";
import { Tuser,Tcomment } from "../../types/types";



export function Post({author,content,comment,interations}:any) {
    const [comments, setComments] = useState('')
    const [replie, setReplie] = useState(false)
    const [viewComment, setViewComment] = useState(false)
    const [like, setLike] = useState(0)
    const [user,setUser] = useState<Tuser>()
    const listComment=[comment]

    function handleReplie() {
        setReplie(!replie)
    }
    function handleViewComment() {
        setViewComment(!viewComment)
    }

    async function deletePost(id:any){
        await apiService.post.deleteURL(id)
        
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
    

    useEffect(()=>{
        getUser()
    },[])


    
    return (
        <S.Container>
            <S.Post>
                <div>
                    <S.Content>
                        <S.Header>
                            <div>
                            <S.User src="https://avatars.githubusercontent.com/u/59348629?v=4" alt="Felipe Botero" />
                                    <h3>{!user?"":user.name}</h3>
                                    <p>{!user?"":user.profession}</p>
                            </div>
                            <button onClick={deletePost}><img className="trash"src={trash} alt="" /></button>
                        </S.Header>
                       {content}
                    </S.Content>
                    <S.Footer>
                        <div>
                            <p>Gostei ({like})</p> <p>3 d</p>
                        </div>
                        <div>
                            <button onClick={e => setLike(like + 1)}>Gostei</button><span><button onClick={handleViewComment}>Comentários</button></span><button onClick={handleReplie}>Responder</button>
                        </div>

                        <S.spaceResponse>
                            {replie ? <form action="">
                                <textarea name="" id="contentComments" onChange={e => setComments(e.target.value)} />
                                {comments !== "" ? <div><button>Enviar</button></div> : ""}
                            </form> : ""}

                        </S.spaceResponse>


                    </S.Footer>

                </div>



            </S.Post>
            {viewComment ? <S.sectionComments> 
                {/* se tiver comentario aparece senao fica um <></> */}

                {listComment.map((comment:Tcomment,index:number)=>(
                    <Comments key={index}  author={comment.author} content={comment.content} interactions={comment.interactions}/>
                ))}
                
                
            </S.sectionComments> : ""}


        </S.Container>
    )
}