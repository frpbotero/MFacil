import { apiService } from "../api/api"



export const getInfo = {
    User:{
        dateNasc:async function(key:any){
            await apiService.user.readByIdUpdateURL(key)
            .then((response:any)=>{
                const data = response.data
               return data.dateNasc
               
            })
            .catch((e:Error)=>{
                console.log(e)
            })
        },
        profession:async function(key:any){
            await apiService.user.readByIdUpdateURL(key)
            .then((response:any)=>{
                const data = response.data
               return data.profession
               
            })
            .catch((e:Error)=>{
                console.log(e)
            })
        },
        resume:async function(key:any){
            await apiService.user.readByIdUpdateURL(key)
            .then((response:any)=>{
                const data = response.data
               return data.resume
               
            })
            .catch((e:Error)=>{
                console.log(e)
            })
        },
        portfolio:async function(key:any){
            await apiService.user.readByIdUpdateURL(key)
            .then((response:any)=>{
                const data = response.data
               return data.linkPortfolio
               
            })
            .catch((e:Error)=>{
                console.log(e)
            })
        }
}
}

export async function userInfo(key:any){
    await apiService.user.readByIdUpdateURL(key)
    .then((response:any)=>{
        const data = response.data
       return data
       
    })
    .catch((e:Error)=>{
        console.log(e)
    })
}