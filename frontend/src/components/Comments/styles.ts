import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #5a5a5a;
  padding: 0.5rem;
  border-radius: 0.5rem;
  flex-direction: column;
  text-align: left;
  width: 70%;
  color:white;
  margin-bottom:0.5rem
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content:space-between;
  img {
    height: 3rem;
    border-radius: 3rem;
    margin-right: 1rem;
  }

    button{
        background:transparent;
        cursor:pointer;

        img{
          height:1.5rem;
        }
    }


`;

export const Content = styled.main`
    background:#343434;
    padding:0.5rem;
    border-radius:0.5rem;
    margin: 0.5rem 0.5rem ;

`

export const Footer = styled.footer`
    display:flex;
    flex-direction:column;
    

    button{

        width:4rem;
        border: 1px solid transparent;
        padding: 0.6em 0.8em;
        border-radius: 8px;
        outline:0;
        cursor:pointer;
        margin-top:0.5rem;
        background-color: #1a1a1a;
        color:white;
    }
    button:hover{
        border-color: #646cff;
        cursor:pointer;
        
    }
    div{
      display:flex;
      justify-content:space-between;
      padding:0 0.5rem
    }
    


`