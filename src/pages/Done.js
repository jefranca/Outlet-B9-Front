import { useContext } from "react";
import UserContext from "../context/UserContext";
import styled from "styled-components"

export default function Done() {
    const { item } = useContext(UserContext);
  
   console.log(item)
    return (
      <DoneContainer>
          <h1>Obrigado pela compra!</h1>
          {item ? (
          <p>Seu pedido do item {item.product}, tamanho {item.size}, foi finalizado no valor de {item.value}</p>):
          (<>Carregando...</>)}
      </DoneContainer>
    );
  }

  const DoneContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

& h1{
    font-size: 30px;
}
& p{
    font-size: 20px;
}
  `;