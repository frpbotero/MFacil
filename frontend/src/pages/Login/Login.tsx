
import {Link} from "react-router-dom"
import * as S from "./styles"

import LoginImage from "../../assets/login.svg"

export function Login(){
    return(
        <S.Container>
            <img src={LoginImage} alt="" />
            <S.content>
                <S.Header>
                    {/* <img src= alt="" /> */}
                    <h4>Bem vindo a bordo!</h4>
                    <h2>MFácil</h2>

                </S.Header>
                <S.Form>
                
                <form >  
                    
                    <div className="inputView">
                   
                    <input type="email" id="userName" placeholder=" Email"/>
                    </div>
                    <div className="inputView">
                    
                    <input type="password" id="password" placeholder="Password" />
                    </div>
                        
                    
                    <button>Log in</button>
                </form>
                <p>Ainda não tem cadastro? </p>
                <Link to="/register" >Registrar</Link>
                </S.Form>
               
        
            </S.content>
        
        </S.Container>
    )


}