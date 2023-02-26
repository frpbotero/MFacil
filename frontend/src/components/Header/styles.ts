import styled from "styled-components";


export const Container = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#A078BE;
    color:white;
    padding:0.2rem 0.5rem;

    a{
        text-decoration:none
    }


    button{
        background-color: #800080;
        font-size:1.25em;
        padding:0.15em 0.5em;
        border-radius:0.5em;
        color:white;
        trasition:all 02s;
        cursor:pointer
    }
    button:hover{
        background-color:#bf40bf;
        trasition:all 02s
    }
    
`

export const Logo = styled.h1`

    img{
        margin-left:1rem;
        width:2rem
    }
`

export const User=styled.button`
    display:flex;
    gap:0.5rem;
    
    align-items:center;
    cursor:pointer;
    background:transparent;
    color:white;
    

    img{
        height:2.5rem;
        border-radius:2rem
    }
    p{
        font-weight:bold
    }
`
