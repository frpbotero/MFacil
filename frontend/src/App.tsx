import './App.css'
import {Route,Routes} from "react-router-dom"
import { Header } from './components/Header/Header'
import AppRoutes from './routes/routes'


function App() {
  

  return (
    <div className="App">
      {/* {user?<HeaderUser user={user} id={user.id}/>:<Header/>} */}
    
      <Header/>
        <div className='content'>
        <AppRoutes />
        </div>
      
  
      
      
    </div>
  )
}

export default App
