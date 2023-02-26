
import {useNavigate} from "react-router-dom"

export function Register(){
    const navigate = useNavigate()

    function login(){
        navigate("/login")
    }

    return(
        <div>
            <div className="containerUser">
            <div className="contentUser">    
            <div className="contentInfoUser">
                    {/* <img className="img1" src={back} alt="" />
                    <img  className="img2"src={Logoregister} alt="" /> */}
                    <h2>Vamos embarcar?</h2>
                    <p>apenas alguns cliques e começamos</p>

                </div>
                <div className="contentFormUser">
                <form >  
                
                    <div className="inputViewUser">
                    
                    <input type="text" id="name" placeholder="Nome" />
                    </div>
                    <div className="inputViewUser">
                    
                    <input type="text" id="userName"placeholder="Email" />
                    </div>
            
                    
                    
                    <div className="inputViewUser">
                    
                    <input type="password" id="password" placeholder="Senha" />
                    </div>
                    <div className="inputViewUser">
                    
                    <input type="password" id="passwordConfirm"placeholder="Confirmação de senha" />
                    </div>
                    
                    <button className="createButton">Registrar</button>
                </form>
                <p>Já tem cadastro? </p>
                <button onClick={login}className="buttonLogin">Log in</button>
                </div>
                
        
        </div>
        
        </div>
        </div>
    )
}