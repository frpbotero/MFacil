
import * as S from "./styles"

import LoginImage from "../../assets/login.svg"
import { useState } from "react"
import { apiService } from "../../api/api"
import { Link, useNavigate } from "react-router-dom"



export function Login(){
    const[email,setEmail]=useState<String>("")
    const[password,setPassword]=useState<String>("")
    const [userInfo,setUserInfo]=useState("null")

    interface IUser{
        email:String,
        password:String
    }
    
    const navigate = useNavigate()

    async function loginUser(event:any){
        event.preventDefault()

        const payload:IUser={
            email:email,
            password:password
        }
        // ---
        await apiService.user.conectUrl(payload)
        .then((response:any)=>{
            console.log(response.data)

             setUserInfo(response.data)

            
        }).catch((e:Error)=>{
            console.log(e)
        })
        
        //  ----    

        console.log(userInfo)
        localStorage.setItem("user",JSON.stringify(userInfo))
        // navigate("/feed")
       

        
        
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
                        
                    
                    <button onClick={loginUser}>Log in</button>
                </form>
                <p>Ainda não tem cadastro? </p>
                <Link to="/register" >Registrar</Link>
                </S.Form>
               
        
            </S.content>
        
        </S.Container>
    )


}