import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { api } from "../api/api";


export function UserProvider({children}:any){
    const [user,setUser]=useState(null)
    const navigate = useNavigate()

    async function userSignUp(formData:any){
        try{
            const response:any = await api.post("/user",formData)
            alert({reponse.message})
            navigate("/")
        }catch{
            alert({})
        }
    }




}