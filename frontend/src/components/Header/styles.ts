import styled from "styled-components";


export const Container = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#A078BE;
    color:white;
    padding:0.2rem 1rem;

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

export const User=styled.div`
    display:flex;
    gap:0.5rem;
    
    align-items:center;
   
    background:transparent;
    color:white;
    
    img{
        height:2.5rem;
        border-radius:2rem
    }
    p{
        font-weight:bold
    }

    div[class='dropdownLogout']{
    display: flex;
    flex-direction: column;
    align-items: center;       
}

    div[class='box']{
        display:flex;
        flex-direction:column;
        position:absolute;
        margin-top:3.5rem;
        
        gap:0.2rem;
        button{
        border:none;
        
        color:white;
        height: 2rem;
        font-size: large;
        border-radius: 0.5rem;
        
        };
        
    }
    /* button[class="buttonUser]{
        diplay:flex
    } */
    
   

    div[class='hidden']{
        display: none;

    }
`
