import './App.css'
import {Route,Routes} from "react-router-dom"
import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'
import { HomeUser } from './pages/HomeUser/HomeUser'
import { ConfigUser } from './pages/ConfigUser/ConfigUser'

function App() {
  

  return (
    <div className="App">
      {/* {user?<HeaderUser user={user} id={user.id}/>:<Header/>} */}
    
      <Header/>
        <div className='content'>
          <Routes>
            <Route  path="/"index  element={<Home/>}/>
            <Route  path="/login" element={<Login/>}/>
            <Route  path="/register" element={<Register/>}/>
            <Route  path="/feed" element={<HomeUser/>}/>
            <Route  path="/handle" element={<ConfigUser/>}/>
          </Routes>
        </div>
      
  
      
      
    </div>
  )
}

export default App
