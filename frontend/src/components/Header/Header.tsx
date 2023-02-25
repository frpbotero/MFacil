import * as S from "./styles"

export function Header(){
    return(
        <S.Container>
            <S.Logo>MFacil</S.Logo>
            <S.User>
            <p>Felipe Botero</p>
            <img src="https://avatars.githubusercontent.com/u/59348629?v=4" alt="Felipe" />
                
            </S.User>
        </S.Container>
    )
}