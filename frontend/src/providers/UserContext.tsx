import React, { useContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import { api } from "../api/api";
import { createContext } from "react";

export const UserContext = createContext({
    
});




    


export function UserProvider({children}:any){
    const [user,setUser]=useState(null)
    const navigate = useNavigate()

    async function userSignUp(formData:any){
        try{
            const response:any = await api.post("/user",formData)
            alert("Usuário criado com sucesso!")
            navigate("/")
        }catch{
            alert("Aconteceu algo de errado, tente novamente!")
        }
    }
    async function userLogin(formData:any){
        
        try{
            const response = await api.post("/login",formData)
            setUser(response.data.user)
            localStorage.setItem("user",response.data.token)
            navigate("/feed")
        }catch{
            alert("Favor verificar os dados e tentar novamente!")
        }

    }

    function logout(){
        setUser(null)
        localStorage.removeItem("user")
        navigate("/")
    }

    useEffect(()=>{
        const token = localStorage.getItem("user")

        if(token){
            async function verifyUserLogin(){
                try{
                    const response = await api.get("/profile",{
                        headers:{
                            Authorization: `Bearee ${token}`
                        } 
                    })
                    setUser(response.data)
                    navigate("/feed")
                }catch(error){
                    localStorage.removeItem("user")
                }
            }
            verifyUserLogin()
        }
    }, [])

    return(
        <UserContext.Provider
        value={
            {
                user,
                setUser,
                userSignUp,
                userLogin,
                logout
            }
        }>

            {children}
        </UserContext.Provider>
    )


}