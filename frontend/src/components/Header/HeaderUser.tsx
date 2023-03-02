import * as S from "./styles"
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import person from "../../assets/person2.svg"
import { Tuser } from "../../types/types";
import { apiService } from "../../api/api";
import getImageByKey from "../../utils/getImageByKey"


const getdate:any = localStorage.getItem("user")

export function HeaderUser(){
    const userLocal = JSON.parse(getdate)
    const [user,setUser] = useState<[Tuser]>()
    // const [header,setHeader]=useState()
    const [flag,setFlag]=useState(false)

    const navigate = useNavigate()


    async function verifyUser(){
        if(!userLocal||userLocal==undefined||userLocal=="null"){
            navigate("/")
        }else{
            ""      
        }
    }

    function handleUpdate(){
        setFlag(!flag);
    }

    function logout(){
        localStorage.removeItem("user")
        navigate("/")
        // window.location.href=window.location.href
    }
    function configUser(){
        navigate("/handle")
        
    }

    async function getUser(){
        
       
        await apiService.user.readByIdURL(userLocal.id)
        .then((response:any)=>{
            const data = response.data
           
            
            setUser(data)
            
        })
        .catch((e:Error)=>{
            console.log(e)
        })
    }
    useEffect(()=>{
      getUser()
      verifyUser()
        
    },[])

   

    return(
        <S.Container>
            <Link to="/feed"><S.Logo><img src={Logo}/></S.Logo></Link>
            
            

                { !user?"":
                    user.map((user:any,index:any)=>(
                        <S.User key={`${user.id}${index}`}>
                        <p>{user.name.split(' ').slice(0,1)}</p>
                        <div className='dropdownLogout'>
                            <button className="userImage" onClick={handleUpdate}>
                                <img src={!user.avatar?person:getImageByKey(user.avatar)} alt="Felipe" />

                            </button>
                            <div className={flag === true ? "box" : "hidden"}>
                                <button onClick={configUser} className='buttonUser'>Usuário</button>
                                <button onClick={logout} className='buttonLogout'>Logout</button>
                            </div>
                        </div>
                        </S.User>
                    ))
                }
            
            
        </S.Container>
    )
}