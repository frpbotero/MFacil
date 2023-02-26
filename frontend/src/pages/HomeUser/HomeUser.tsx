import { Post } from "../../components/Posts/Post";
import * as S from "./styles"


export function HomeUser(){
    return(
        <S.Conteiner>
            <Post />
            <Post />
        </S.Conteiner>
    )
}