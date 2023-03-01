import * as S from "./styles"
import user from "../../assets/user.svg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Tuser } from "../../types/types"
import { apiService } from "../../api/api"

const getdate:any = localStorage.getItem("user")

export function ConfigUser(){
    const userLocal = JSON.parse(getdate)

    const [profession,setProfession]=useState<String>()
    const [dateNasc,setDateNasc]= useState<String>()
    const [resume,setResume]=useState<String>()
    const [portfolio,setPortfolio]=useState<String>()

    const navigate = useNavigate()


    console.log(userLocal.id)
    async function updateUser(event:any){
        event.preventDefault()

        const id = userLocal.id
        const payload:Tuser={
            profession:profession,
            dateNasc:dateNasc,
            resume:resume,
            linkPortfolio:portfolio
        }
        const request = await apiService.user.updateURL(id,payload)
        // const data = await request.json()
        if(request.status==200){
           alert("Usuario criado com sucesso!")
            
            navigate("/feed")
            window.location.href=window.location.href
        }else{
            alert("Aconteceu algo de errado!")
        }

        navigate("/feed")
    }





    return(
        <S.Container>
            <S.User>
                <div>
            <label className="file"htmlFor="selection"><S.UserImage src={user} /></label>
            <input type="file" id="selection" />
            <h2>Felipe</h2>
                </div>
            <S.Content>
                     <label htmlFor="profession">Profissão</label>
                    <input type="text" id="profession" placeholder="Designer" onChange={e=>setProfession(e.target.value)}/>
                    
                    <label htmlFor="dateNasc">Data de nascimento</label>
                    <input type="date" id="dateNasc" onChange={e=>setDateNasc(e.target.value)}/>
                
                    <label htmlFor="resume">Resumo</label>
                    <textarea id="resume" placeholder="Desenvolvo projetos..." onChange={e=>setResume(e.target.value)}/>
                
                
                    <label htmlFor="linkPortfolio">Portifólio</label>
                    <input type="text" id="linkPortfolio" placeholder="https://medium.com/@fulado" onChange={e=>setPortfolio(e.target.value)}/>
                
                <div>

                <button onClick={updateUser}>Salvar</button>
                </div>
            </S.Content>
            </S.User>

        </S.Container>
    )
}