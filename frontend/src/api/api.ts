import axios from "axios"
import {Tuser,Tpost,Tcomment} from "../types/types"


const api = axios.create({
    baseURL:"http://localhost:3333",
    headers:{
        "Content-Type":"application/json"
    }
})
"https://mfacil.onrender.com"


export const apiService = {
    user:{
        readAllURL:function(){
            return api.get<Tuser>("/user")
        },
        readByIdURL:function(id:any){
            return api.get<Tuser>("/user/"+id)
        },
        readByIdUpdateURL:function(id:any){
            return api.get<Tuser>("/user/update/"+id)
        },
        createURL:function(body:Tuser){
            return api.post<Tuser>("/user",body)
        },
        
        updateURL:function(id:any,body:Tuser){
            return api.put<any>("/user/"+id,body)
        },
        deleteURL:function(id:any){
            return api.delete<any>("/user/"+id)
        },
        conectUrl: function (body:Tuser) {
            return api.post("/user/login",body)
          },

    },
    post:{
        readAllURL:function(){
            return api.get<Tpost>("/post")
        },
        readByIdURL:function(id:any){
            return api.get<Tpost>("/post/"+id)
        },
        createURL:function(body:Tpost){
            return api.post<Tpost>("/post",body)
        },
        
        updateURL:function(id:any,body:Tpost){
            return api.put<any>("/post/"+id,body)
        },
        deleteURL:function(id:any){
            return api.delete<any>("/post/"+id)
        },

    },
    comment:{
        readAllURL:function(){
            return api.get<Tcomment>("/comment")
        },
        readByIdURL:function(id:any){
            return api.get<Tcomment>("/comment/"+id)
        },
        createURL:function(body:Tcomment){
            return api.post<Tcomment>("/comment",body)
        },
        
        updateURL:function(id:any,body:Tcomment){
            return api.put<any>("/comment/"+id,body)
        },
        deleteURL:function(id:any){
            return api.delete<any>("/comment/"+id)
        },

    },




}