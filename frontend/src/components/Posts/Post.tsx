import { useState } from "react";
import * as S from "./styles";

export function Post(){
    const [comment,setComment]=useState('')
    const [replie,setReplie]=useState(false)
    function handleReplie(){
        setReplie(!replie)
    }


    return(
        <S.Container>     
            <S.User src="https://avatars.githubusercontent.com/u/59348629?v=4" alt="Felipe Botero" />  
            
            <S.Post>
            
                <S.Content>
                <S.Header>
                    <h3>Felipe Botero</h3>
                    <p>Desenvolvedor Front-end</p>
                </S.Header>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, esse! Ex quo vitae illum unde doloremque, esse officiis, a quas aliquid doloribus eius ratione deleniti sequi explicabo tenetur soluta consequuntur!
                </S.Content>
                <S.Footer>
                <div>
                    <p>Gostei (4)</p> <p>3 d</p>
                </div>
                <div>

                <button>Gostei</button><span><button>Comentários</button></span><button onClick={handleReplie}>Responder</button>  
                </div>

                <S.spaceResponse>
                {replie? <form action="">
                    <textarea name="" id="contentComments" onChange={e=>setComment(e.target.value)}/>
                    {comment!==""? <div><button>Enviar</button></div>:""}
                </form>:""}

            </S.spaceResponse>


            </S.Footer>
            
            </S.Post>
            
            
            
        </S.Container>
    )
}