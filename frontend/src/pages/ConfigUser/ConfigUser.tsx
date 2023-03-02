import * as S from "./styles"
import user from "../../assets/user.svg"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Tuser } from "../../types/types"
import { apiService } from "../../api/api"
import user1 from "../../assets/avatar/user1.svg"
import user2 from "../../assets/avatar/user2.svg"
import user3 from "../../assets/avatar/user3.svg"
import user4 from "../../assets/avatar/user4.svg"
import user5 from "../../assets/avatar/user5.svg"
import user6 from "../../assets/avatar/user6.svg"
import user7 from "../../assets/avatar/user7.svg"
import user8 from "../../assets/avatar/user8.svg"
import user9 from "../../assets/avatar/user9.svg"
import user10 from "../../assets/avatar/user10.svg"
import user11 from "../../assets/avatar/user11.svg"
import user12 from "../../assets/avatar/user12.svg"
import user13 from "../../assets/avatar/user13.svg"
import user14 from "../../assets/avatar/user14.svg"
import user15 from "../../assets/avatar/user15.svg"
import user16 from "../../assets/avatar/user16.svg"
import user17 from "../../assets/avatar/user17.svg"
import user18 from "../../assets/avatar/user18.svg"
import user19 from "../../assets/avatar/user19.svg"
import user20 from "../../assets/avatar/user20.svg"
import user21 from "../../assets/avatar/user21.svg"
import user22 from "../../assets/avatar/user22.svg"
import user23 from "../../assets/avatar/user23.svg"
import user24 from "../../assets/avatar/user24.svg"
import user25 from "../../assets/avatar/user25.svg"
import user26 from "../../assets/avatar/user26.svg"
import user27 from "../../assets/avatar/user27.svg"
import user28 from "../../assets/avatar/user28.svg"
import user29 from "../../assets/avatar/user29.svg"
import user30 from "../../assets/avatar/user30.svg"




const getdate:any = localStorage.getItem("user")


export function ConfigUser(){
    const userLocal:any = JSON.parse(getdate)

    async function verifyUser(){
        if(!userLocal||userLocal==undefined||userLocal=="null"){
            navigate("/")
        }else{
            ""      
        }
    }

    
    const [profession,setProfession]=useState<any>("")
    const [dateNasc,setDateNasc]= useState<any>("")
    const [resume,setResume]=useState<any>("")
    const [portfolio,setPortfolio]=useState<any>("")
    const [avatar,setAvatar] = useState<any>("")
    
    const navigate = useNavigate()

    
    async function updateUser(event:any){
        event.preventDefault()
        const id = userLocal.id
        
        const payload:Tuser={}
        
        if(avatar!=""){
            payload.avatar=avatar
        }
        if(resume!=""){
            payload.resume=resume
        }
        if(portfolio!=""){
            payload.linkPortfolio=portfolio
        }
        if(profession!=""){
            payload.profession=profession
        }
         

        console.log(payload)
        const request = await apiService.user.updateURL(id,payload)
        // const data = await request.json()
        if(request.status==200){
           alert("Usuario criado com sucesso!")
            navigate("/feed")
        }else{
            alert("Aconteceu algo de errado!")
        }

        navigate("/")
    }

    useEffect(()=>{
        verifyUser()
    })


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
            <div><img className="avatar" src={user21} alt="Avatar 21" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user21" name="avatar"/></div>
            <div><img className="avatar" src={user22} alt="Avatar 22" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user22" name="avatar"/></div>
            <div><img className="avatar" src={user23} alt="Avatar 23" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user23" name="avatar"/></div>
            <div><img className="avatar" src={user24} alt="Avatar 24" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user24" name="avatar"/></div>
            <div><img className="avatar" src={user25} alt="Avatar 25" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user25" name="avatar"/></div>
            <div><img className="avatar" src={user26} alt="Avatar 26" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user26" name="avatar"/></div>
            <div><img className="avatar" src={user27} alt="Avatar 27" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user27" name="avatar"/></div>
            <div><img className="avatar" src={user28} alt="Avatar 28" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user28" name="avatar"/></div>
            <div><img className="avatar" src={user29} alt="Avatar 29" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user29" name="avatar"/></div>
            <div><img className="avatar" src={user30} alt="Avatar 30" /><input type="radio" onChange={e=>{setAvatar(e.target.value)}} value="user30" name="avatar"/></div>
        
                    </div>
               
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