
import {Link} from "react-router-dom"
import * as S from "./styles"
import {useNavigate} from "react-router-dom"

import RegisterImage from "../../assets/register.svg"
import { useState } from "react"
import { apiService } from "../../api/api"
import { Tuser } from "../../types/types"





export function Register(){
    
       const [name,setName]=useState<String>("")
       const [email,setEmail]=useState<String>("")
       const [password,setPassword]=useState<String>("")
       const [confirmPassword,setConfirmPassword]=useState<String>("")


       const navigate = useNavigate()
    
    function ValidarEmail (email:any) {
        var emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
         return emailPattern.test(email); 
      }
      const nowDate = new Date()

    async function registerUser(event:any){
        event.preventDefault()
          const payload:Tuser = {
            name:name,
            email:email,
            password:password,
            createdAt:nowDate,
            confirmPassword:confirmPassword
        }
        
        console.log(payload)

        if(ValidarEmail(payload.email)){
            const request = await apiService.user.createURL(payload)
            // const data = await request.json()
            if(request.status==200){
               alert("Usuario criado com sucesso!")
                
                navigate("/login")
                window.location.href=window.location.href
            }else{
                alert("Aconteceu algo de errado!")
            }
        }else{
           alert("Favor inserir um email valído!")
        }

            
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