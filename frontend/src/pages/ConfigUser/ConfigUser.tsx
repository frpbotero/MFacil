import * as S from "./styles"
import user from "../../assets/user.svg"


export function ConfigUser(){
    return(
        <S.Container>
            <S.User>
                <div>
            <label className="file"htmlFor="selection"><S.UserImage src={user} /></label>
            <input type="file" id="selection" />
            <h2>Felipe</h2>
                </div>
            <S.Content>
                     <label htmlFor="profession">Profissão</label>
                    <input type="text" id="profession" placeholder="Designer"/>
                    
                    <label htmlFor="dateNasc">Data de nascimento</label>
                    <input type="date" id="dateNasc" />
                
                    <label htmlFor="resume">Resumo</label>
                    <textarea id="resume" placeholder="Desenvolvo projetos..."/>
                
                
                    <label htmlFor="linkPortfolio">Portifólio</label>
                    <input type="text" id="linkPortfolio" placeholder="https://medium.com/@fulado"/>
                
                <div>

                <button>Salvar</button>
                </div>
            </S.Content>
            </S.User>

        </S.Container>
    )
}