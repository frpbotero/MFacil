import { useState } from "react";
import * as S from "./styles";
import { Comments } from "../Comments/Comments";
import trash from "../../assets/trash.svg"



export function Post() {
    const [comment, setComment] = useState('')
    const [replie, setReplie] = useState(false)
    const [viewComment, setViewComment] = useState(false)
    const [like, setLike] = useState(0)

    function handleReplie() {
        setReplie(!replie)
    }
    function handleViewComment() {
        setViewComment(!viewComment)
    }

    return (
        <S.Container>
            <div>

                {/* Abrir modal para novo post */}
                <button>Novo Post</button>
            </div>
            <S.Post>
                <S.User src="https://avatars.githubusercontent.com/u/59348629?v=4" alt="Felipe Botero" />

                <div>

                    <S.Content>
                        <S.Header>
                            <div>
                                <h3>Felipe Botero</h3>
                                <p>Desenvolvedor Front-end</p>
                            </div>
                            <button><img src={trash} alt="" /></button>
                        </S.Header>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, esse! Ex quo vitae illum unde doloremque, esse officiis, a quas aliquid doloribus eius ratione deleniti sequi explicabo tenetur soluta consequuntur!
                    </S.Content>
                    <S.Footer>
                        <div>
                            <p>Gostei ({like})</p> <p>3 d</p>
                        </div>
                        <div>

                            <button onClick={e => setLike(like + 1)}>Gostei</button><span><button onClick={handleViewComment}>Comentários</button></span><button onClick={handleReplie}>Responder</button>
                        </div>

                        <S.spaceResponse>
                            {replie ? <form action="">
                                <textarea name="" id="contentComments" onChange={e => setComment(e.target.value)} />
                                {comment !== "" ? <div><button>Enviar</button></div> : ""}
                            </form> : ""}

                        </S.spaceResponse>


                    </S.Footer>

                </div>



            </S.Post>
            {viewComment ? <S.sectionComments>
                <Comments />
                <Comments />
                <Comments />
            </S.sectionComments> : ""}


        </S.Container>
    )
}