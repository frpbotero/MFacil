
import {Link} from "react-router-dom"
import * as S from "./styles"

import RegisterImage from "../../assets/register.svg"

export function Register(){
   

    return(
        <S.Container>
            <img src={RegisterImage} alt="" />
            <S.content>
                <S.Header>
                    
                    <h4>Vamos embarcar?</h4>
                    <h2>MFácil</h2>

                </S.Header>
                <S.Form>
                
                <form >  
                    
                    <div >
                    <input type="text" id="name" placeholder="Nome"/>
                    </div>
                    <div >
                    <input type="email" id="userName" placeholder="Email"/>
                    </div>
                    <div >
                    <input type="password" id="password" placeholder="Password" />
                    </div>
                    <div >
                    <input type="password" id="comfirpPassword" placeholder="Confirme seu password" />
                    </div>
                        
                    
                    <button>Sing in</button>
                </form>
                <p>Já tem cadastro? </p>
                <Link to="/login" >Login</Link>
                </S.Form>
               
        
            </S.content>
        
        </S.Container>
    )


}