import * as S from "./styles"
import MFacil from "../../assets/Ideia MFacil.png"
import { useNavigate } from "react-router-dom";

const local:any = localStorage.getItem("user")
const user = JSON.parse(local)

export function Home(){
    const navigate = useNavigate()
    async function verifyUser(){
        if(!user||user==undefined||user=="null"){
            navigate("/")
        }else{
            ""      
        }
    }
    return(
        <S.Background>
            <img src={MFacil} alt="" />
        </S.Background>
    )
}