import styled from "styled-components";


export const Conteiner = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center; 
    padding-top:0.5rem;
    

`
export const Post = styled.form`
    display:flex;
    flex-direction:column;
    aling-items:center;
    width:40vw;
    
    
    
    textarea{
        width:100%;
        height:10vh;
        padding:0.5rem;resize: none;
        border-radius:0.5rem
    }
    div[class='button']{
        display:flex;
        justify-content: flex-end;
        margin:0.5rem 0 ;
    }
    button{
        width:5rem;
        height:2rem;
        background-color:#e9e9e9;
        border-radius:1rem;
        color:#bdbebd;
        cursor: not-allowed;
    }
    button[class='postButton'] {
        width:5rem;
        height:2rem;
        background-color: #800080;
        border-radius:1rem;
        color:white;
        cursor: pointer;
    }

`