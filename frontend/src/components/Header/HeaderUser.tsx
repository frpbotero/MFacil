import * as S from "./styles"
import { Link } from "react-router-dom";
export function Header(){
    return(
        <S.Container>
            <Link to="/"><S.Logo>MFacil</S.Logo></Link>
            <S.User>
            <p>Felipe Botero</p>
            <img src="https://avatars.githubusercontent.com/u/59348629?v=4" alt="Felipe" />  
            </S.User>
        </S.Container>
    )
}