import styled from "styled-components";

export const Container = styled.body`
    width:30vw;
    display:flex;
    align-items:top;
   
    

`
export const User = styled.img`
        height:3rem;
        margin-right:0.5rem;
        border-radius:3rem
    
`


export const Header=styled.header`
    display:flex
    flex-direction:column;
    margin-bottom:0.5rem;

    p{
        font-weight:lighter
    }

`

export const Post=styled.div`
    

`
export const Content=styled.main`
    
    text-align:justify;
    background-color:#cecece;
    padding:0.5em;
    border-radius:0.5rem

`
export const Footer=styled.footer`
    margin-top:0.5rem;
    display:flex;
    flex-direction:column;
    
    

    button{
        background:transparent;
        border: 1px solid transparent;
        padding: 0.6em 0.8em;
        border-radius: 8px;
        outline:0;
        cursor:pointer;
        margin-top:0.5rem;
        color:#a8a8a8;
        trasition: all 0.5s;
        margin-bottom:0.5rem
    }
    button:hover{
        background:#a8a8a8;
        color:white;
        cursor:pointer;
        trasition: all 0.5s
        
    }
    div{
      display:flex;
      justify-content:space-between;
      padding:0 0.5rem
    }

`
export const Botoes = styled.div`
    display:flex
    
`
export const spaceResponse = styled.div`
   display:flex;
   flex-direction:column;
   
textarea{
    width:100%;
    border: 1px solid #ccc;
    border-radius:1rem;
    resize: none;
    padding: 0.8rem 0.5em
}
textarea:focus{
    
    border:solid transparent;
}

div{
    display: flex;
    justify-content:flex-end
}


`
