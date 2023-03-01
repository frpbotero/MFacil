import * as S from "./styles";
import trash from "../../assets/trash.svg"
import { apiService } from "../../api/api";
import person from "../../assets/person2.svg"
import { useEffect, useState } from "react";
import { Tuser } from "../../types/types";


const getdate:any = localStorage.getItem("user")

export function Comments({author,content,_id,refreshComment}:any){
    
    const userLocal = JSON.parse(getdate)
    const [user,setUser] = useState<Tuser>()
    async function deleteComment(){
        
        if(author==userLocal.id){
        const request=   await apiService.comment.deleteURL(_id)

        if (request.status == 200) {
            alert("Item excluído com sucesso! ");
          } else {
            alert("Algo aconteceu de errado, item não excluído.");
          }
          refreshComment()
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
    useEffect(()=>{
        getUser()
       
    },[])


    return(
        <S.Container>
            <S.Header>
                <div>
                {
                                    !user?"":
                                    user.map((user:any,index:any)=>(
                                        <div key={`${user.id}${index}`} >
                                     <img  src={person} alt={user.name.split(' ').slice(0,1)}/>
                                    <h3>{user.name.split(' ').slice(0,1)}</h3>
                                    <p>{user.profession}</p>
                                    </div>))
                                }
                
                </div>
                <button onClick={deleteComment}><img src={trash} alt="" /></button>
            </S.Header>
            <S.Content>
                {content}
            </S.Content>
            <S.Footer>
                {/* <div>
                    <p>Gostei (4)</p> 
                </div>
                <button>Gostei</button> */}
            </S.Footer>
        </S.Container>
    )
}