import * as S from "./styles";
import React from "react";
import trash from "../../assets/trash.svg"

export function Comments({author,content,interations}:any){
    return(
        <S.Container>
            <S.Header>
                <div>
                <img src="https://avatars.githubusercontent.com/u/59348629?v=4" alt="Felipe" />
                <p>{author}</p>
                </div>
                <button><img src={trash} alt="" /></button>
            </S.Header>
            <S.Content>
                {content}
            </S.Content>
            <S.Footer>
                <div>
                    <p>Gostei (4)</p> <p>3 d</p>
                </div>
                <button>Gostei</button>
            </S.Footer>
        </S.Container>
    )
}