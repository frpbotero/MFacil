import * as S from "./styles"
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg"




export function Header(){
    return(
        <S.Container>
            <Link to="/"><S.Logo><img src={Logo}/></S.Logo></Link>
            
            <Link to="/login"><button >Login</button></Link>
            
        </S.Container>
    )
}