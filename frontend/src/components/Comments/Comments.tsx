import * as S from "./styles";
import React from "react";

export function Comments(){
    return(
        <S.Container>
            <S.Header>
                <img src="https://avatars.githubusercontent.com/u/59348629?v=4" alt="Felipe" />
                <p>Felipe Botero</p>
            </S.Header>
            <S.Content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ducimus praesentium, itaque repellendus fuga, omnis doloribus rerum tenetur amet impedit eius voluptatibus non vel adipisci possimus deleniti provident, optio veniam.
            </S.Content>
            <S.Footer>
                <div>
                    <p>Gostei (4)</p> <p>3 d</p>
                </div>
                <button>Gostei</button>
            </S.Footer>
        </S.Container>
    )
}