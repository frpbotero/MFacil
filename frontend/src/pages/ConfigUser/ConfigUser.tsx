import * as S from "./styles"
import user from "../../assets/user.svg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Tuser } from "../../types/types"
import { apiService } from "../../api/api"
import user1 from "../../assets/avatar/user1.png"
import user2 from "../../assets/avatar/user2.png"
import user3 from "../../assets/avatar/user3.png"
import user4 from "../../assets/avatar/user4.png"
import user5 from "../../assets/avatar/user5.png"
import user6 from "../../assets/avatar/user6.png"
import user7 from "../../assets/avatar/user7.png"
import user8 from "../../assets/avatar/user8.png"
import user9 from "../../assets/avatar/user9.png"
import user10 from "../../assets/avatar/user10.png"
import user11 from "../../assets/avatar/user11.png"
import user12 from "../../assets/avatar/user12.png"
import user13 from "../../assets/avatar/user13.png"
import user14 from "../../assets/avatar/user14.png"
import user15 from "../../assets/avatar/user15.png"
import user16 from "../../assets/avatar/user16.png"
import user17 from "../../assets/avatar/user17.png"
import user18 from "../../assets/avatar/user18.png"
import user19 from "../../assets/avatar/user19.png"
import user20 from "../../assets/avatar/user20.png"

const getdate:any = localStorage.getItem("user")

interface Iuser{
    profession?:string;
    dateNasc?:string;
    resume?:string;
    linkPortfolio?:string;
    email?:string;
}




export function ConfigUser(){
    const userLocal = JSON.parse(getdate)

    const [profession,setProfession]=useState<string>("")
    const [dateNasc,setDateNasc]= useState<string>("")
    const [resume,setResume]=useState<string>("")
    const [portfolio,setPortfolio]=useState<String>("")
    const [avatar,setAvatar] = useState<String>("")
    

    const navigate = useNavigate()


    
    async function updateUser(event:any){
        event.preventDefault()

        const id = userLocal.id
        const payload:Tuser={
            avatar:avatar,
            profession:profession,
            dateNasc:dateNasc,
            resume:resume,
            linkPortfolio:portfolio
        }
        console.log(payload)
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
                <div><label htmlFor="avatar">Selecione seu avatar</label>
                    <div className="selectAvatar">
                    
            
            <div><img className="avatar" src={user1} alt="Avatar 01" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user1" name="avatar"/></div>
            <div><img className="avatar" src={user2} alt="Avatar 02" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user2" name="avatar"/></div>
            <div><img className="avatar" src={user3} alt="Avatar 03" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user3" name="avatar"/></div>
            <div><img className="avatar" src={user4} alt="Avatar 04" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user4" name="avatar"/></div>
            <div><img className="avatar" src={user5} alt="Avatar 05" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user5" name="avatar"/></div>
            <div><img className="avatar" src={user6} alt="Avatar 06" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user6" name="avatar"/></div>
            <div><img className="avatar" src={user7} alt="Avatar 07" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user7" name="avatar"/></div>
            <div><img className="avatar" src={user8} alt="Avatar 08" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user8" name="avatar"/></div>
            <div><img className="avatar" src={user9} alt="Avatar 09" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user9" name="avatar"/></div>
            <div><img className="avatar" src={user10} alt="Avatar 10" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user10" name="avatar"/></div>
            <div><img className="avatar" src={user11} alt="Avatar 11" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user11" name="avatar"/></div>
            <div><img className="avatar" src={user12} alt="Avatar 12" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user12" name="avatar"/></div>
            <div><img className="avatar" src={user13} alt="Avatar 13" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user13" name="avatar"/></div>
            <div><img className="avatar" src={user14} alt="Avatar 14" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user14" name="avatar"/></div>
            <div><img className="avatar" src={user15} alt="Avatar 15" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user15" name="avatar"/></div>
            <div><img className="avatar" src={user16} alt="Avatar 16" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user16" name="avatar"/></div>
            <div><img className="avatar" src={user17} alt="Avatar 17" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user17" name="avatar"/></div>
            <div><img className="avatar" src={user18} alt="Avatar 18" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user18" name="avatar"/></div>
            <div><img className="avatar" src={user19} alt="Avatar 19" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user19" name="avatar"/></div>
            <div><img className="avatar" src={user20} alt="Avatar 20" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user20" name="avatar"/></div>
        
                    </div>
               
            <input type="file" id="selection" />
            <h2>Felipe</h2>
                </div>
            <S.Content>
                     <label htmlFor="profession">Profissão</label>
                    <input type="text" id="profession" placeholder="Designer" value={profession} onChange={e=>setProfession(e.target.value)}/>
                    
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