import * as S from "./styles";
import React from "react";
import trash from "../../assets/trash.svg"
import { apiService } from "../../api/api";

export function Comments({author,content,interations,_id,refreshComment}:any){

    async function deleteComment(){
        const request=   await apiService.comment.deleteURL(_id)

        if (request.status == 200) {
            alert("Item excluído com sucesso! ");
          } else {
            alert("Algo aconteceu de errado, item não excluído.");
          }
          refreshComment()
    }




    return(
        <S.Container>
            <S.Header>
                <div>
                <img src="https://avatars.githubusercontent.com/u/59348629?v=4" alt="Felipe" />
                <p>{author}</p>
                </div>
                <button onClick={deleteComment}><img src={trash} alt="" /></button>
            </S.Header>
            <S.Content>
                {content}
            </S.Content>
            <S.Footer>
                <div>
                    <p>Gostei (4)</p> 
                </div>
                <button>Gostei</button>
            </S.Footer>
        </S.Container>
    )
}