import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../context/UserContext";
import StyledButton from "../styles/shared/StyledButton";
import StyledDiv from "../styles/shared/StyledDiv";
import StyledText from "../styles/shared/StyledText";
import { sellItem } from "../services/API";

export default function Payment() {
  const navigate = useNavigate();
  const { item } = useContext(UserContext);

  function finishOrder(e){
      e.preventDefault();
      sellItem(item.id)
      .then((res=>{
        navigate("/done")
      }))
      .catch((err)=>{
          console.error(err)
      })
  }

  return (
    <>
    
      <StyledForm onSubmit={finishOrder}>
          {item ? (<Card>
      <img src={item.img} />
      <div>
        <p>{item.product}</p>
        <p>{item.size}</p>
        <p>R${item.value}</p>
      </div>
    </Card>)
          :
          (<>Carregando...</>)}
      
        <div className="selectBox">
          <p className="select">Forma de Pagamento</p>
          <select className="select">
            <option>Cartão de credito</option>
            <option>Boleto</option>
          </select>
        </div>

        <div className="inputs">
          <input type="text" placeholder="Cidade" required />
          <input type="text" placeholder="Estado" required />
          <input type="text" placeholder="bairro" required />
          <input type="text" placeholder="rua" required />
          <input type="text" placeholder="número" required />
        </div>
        <StyledDiv>
          <StyledButton type="submit">Comprar</StyledButton>
          <StyledText onClick={() => navigate("/")}>Cancelar</StyledText>
        </StyledDiv>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & .selectBox {
    margin: 30px;
  }

  & .select {
    width: 325px;
    height: 54px;
    box-sizing: border-box;
    padding: 10px;
    font-size: 23px;
    font-weight: 500;
  }

  & .inputs {
    display: flex;
    flex-direction: column;
    height: 289px;
    & input {
      margin-bottom: 9px;
    }
  }
  & input {
    width: 325px;
    height: 64px;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 10px;
    font-size: 25px;
    font-weight: 500;
  }
`;

const Card = styled.div`
width: 400px;
height: 200px;
background-color: #ffffff;
margin: 15px;
display: flex;
justify-content: space-between;
border-radius: 10px;

& img {
  width: 200px;
  height: 200px;
  border-radius: 10px 0px 0px 10px;
}

& div {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
}
`;

