
import {Link} from "react-router-dom"
import * as S from "./styles"

import LoginImage from "../../assets/login.svg"
import { useState } from "react"




export function Login(){
    const[email,setEmail]=useState<String>()
    const[password,setPassword]=useState<String>()

    const payload={
        email:email,
        password:password
    }

    function ApiLogin(event:any){
        event.preventDefault()
        console.log(email)
        console.log(password)
    }


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
                   
                    <input type="email"id="userName" placeholder=" Email" onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div className="inputView">
                    
                    <input type="password" id="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                    </div>
                        
                    
                    <button onClick={ApiLogin}>Log in</button>
                </form>
                <p>Ainda não tem cadastro? </p>
                <Link to="/register" >Registrar</Link>
                </S.Form>
               
        
            </S.content>
        
        </S.Container>
    )


}