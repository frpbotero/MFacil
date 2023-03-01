import './App.css'
import { useNavigate } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { HeaderUser } from './components/Header/HeaderUser'
import AppRoutes from './routes/routes'
import { useEffect, useState } from 'react'

const gUser:any = localStorage.getItem("user")


 function App() {
  const [user,setUser]=useState("")
  const navigate = useNavigate()

  function getUser(){
   if(gUser!==undefined){
    setUser(JSON.parse(gUser))
    navigate("/feed")
    }
  }
  
  useEffect(()=>{
    getUser()
    
  },[])
  
  
  return (
    <div className="App">
      {!user?<Header/>:<HeaderUser  />}
    
      {/* <HeaderUser/> */}
        <div className='content'>
        <AppRoutes />
        </div>
      
  
      
      
    </div>
  )
}

export default App
