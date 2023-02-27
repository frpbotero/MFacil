
import {Link} from "react-router-dom"
import * as S from "./styles"

import RegisterImage from "../../assets/register.svg"
import { useState } from "react"

export function Register(){
    
       const [name,setName]=useState<String>("")
       const [email,setEmail]=useState<String>("")
       const [password,setPassword]=useState<String>("")
       const [confirmPassword,setConfirmPassword]=useState<String>("")

    const payload = {
        name:name,
        email:email,
        password:password,
        confirmPassword:confirmPassword
    }


    function registerUser(event:any){
        event.preventDefault()
        console.log(payload)
    }


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
                    <input type="text" id="name" placeholder="Nome" onChange={e=>setName(e.target.value)}/>
                    </div>
                    <div >
                    <input type="email" id="userName" placeholder="Email"onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div >
                    <input type="password" id="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                    </div>
                    <div >
                    <input type="password" id="comfirpPassword" placeholder="Confirme seu password" onChange={e=>setConfirmPassword(e.target.value)}/>
                    </div>
                        
                    
                    <button onClick={registerUser}>Sing in</button>
                </form>
                <p>Já tem cadastro? </p>
                <Link to="/login" >Login</Link>
                </S.Form>
               
        
            </S.content>
        
        </S.Container>
    )


}