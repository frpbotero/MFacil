
import {Link,useNavigate} from "react-router-dom"
import * as S from "./styles"

export function Login(){
    const navigate = useNavigate()

    

    return(
        <S.Container>
            <S.content>
                <S.Header>
                    {/* <img src= alt="" /> */}
                    <h2>Bem vindo a bordo!</h2>
                    <p>vamos lá?</p>

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