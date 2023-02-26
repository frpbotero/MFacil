import styled from "styled-components";


export const Container=styled.div`
    background-color:gray;
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;

`
export const User = styled.div`
   display:flex;
   
   flex-direction:column;
   
    width:50vw;
   
   padding:1.5rem;

   button{
        background:transparent;
        cursor:pointer
}

input[type='file']{
    display: none;
}
label[class='file']{
    


  cursor: pointer;
  
}


`

export const UserImage = styled.img`
    background-color:white;
    padding:0.5rem;
    border:1px solid purple;
    border-radius:3rem;
    width:3rem;
    positon:absolute
`


export const Content = styled.div`
    display:flex;
    flex-direction:column;

    
    input{
        border:2px solid purple;
        padding:0.3rem;
        font-size:large;
        border-radius:0.5rem;
    }
    input:focus{
        border:none;
        background-color:#fffff0;
        outline:0
        
    }
    div{
        display:flex;
        justify-content:center;
        margin-top:2rem
    }
    button{
        width:8rem;
        border:1px solid green;
        border-radius:1rem;
        height:3rem;
        color:white;
        font-size:large;

    }
    button:hover{
        border:none;
        background-color:green;

    }
`