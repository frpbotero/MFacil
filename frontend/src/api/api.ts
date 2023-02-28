import axios from "axios"
import {user,post,comment} from "../types/types"

const api = axios.create({
    baseURL:"http://localhost:3333/",
    headers:{
        "Content-Type":"application/json"
    }
})

export const apiService = {
    user:{
        readAllURL:function(){
            return api.get<user>("/user")
        },
        readByIdURL:function(id:any){
            return api.get<user>("/user/"+id)
        },
        createURL:function(body:user){
            return api.post<user>("/user",body)
        },
        
        updateURL:function(id:any,body:user){
            return api.put<any>("/user/"+id,body)
        },
        deleteURL:function(id:any){
            return api.delete<any>("/user/"+id)
        },

    },
    post:{
        readAllURL:function(){
            return api.get<post>("/post")
        },
        readByIdURL:function(id:any){
            return api.get<post>("/post/"+id)
        },
        createURL:function(body:post){
            return api.post<post>("/post",body)
        },
        
        updateURL:function(id:any,body:post){
            return api.put<any>("/post/"+id,body)
        },
        deleteURL:function(id:any){
            return api.delete<any>("/post/"+id)
        },

    },
    comment:{
        readAllURL:function(){
            return api.get<comment>("/comment")
        },
        readByIdURL:function(id:any){
            return api.get<comment>("/comment/"+id)
        },
        createURL:function(body:comment){
            return api.post<comment>("/comment",body)
        },
        
        updateURL:function(id:any,body:comment){
            return api.put<any>("/comment/"+id,body)
        },
        deleteURL:function(id:any){
            return api.delete<any>("/comment/"+id)
        },

    },




}