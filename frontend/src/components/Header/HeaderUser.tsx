import * as S from "./styles"
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import person from "../../assets/person2.svg"
import { Tuser } from "../../types/types";
import { apiService } from "../../api/api";
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

interface Iimages{
        user:string
}


const getdate:any = localStorage.getItem("user")

export function HeaderUser(){
    const userLocal = JSON.parse(getdate)
    const [user,setUser] = useState<[Tuser]>()
    // const [header,setHeader]=useState()
    const [flag,setFlag]=useState(false)

    const navigate = useNavigate()

    function handleUpdate(){
        setFlag(!flag);
    }

    function logout(){
        localStorage.removeItem("user")
        navigate("/")
        window.location.href=window.location.href
    }
    function configUser(){
        navigate("/handle")
        
    }

    async function getUser(){
        
       
        await apiService.user.readByIdURL(userLocal.id)
        .then((response:any)=>{
            const data = response.data
           
            console.log(data)
            setUser(data)
            
        })
        .catch((e:Error)=>{
            console.log(e)
        })
    }
    useEffect(()=>{
      getUser()
        
    },[])

    const images:any= {
        user1, 
        user2 ,
        user3 ,
        user4 ,
        user5 ,
        user6 ,
        user7 ,
        user8 ,
        user9 ,
        user10,
        user11,
        user12,
        user13,
        user14,
        user15,
        user16,
        user17,
        user18,
        user19,
        user20,
        
    }
    function getImageByKey(key: any) {
        return images[key]
      }


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