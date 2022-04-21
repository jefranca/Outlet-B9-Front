import { useState } from "react";
import StyledButton from "../styles/shared/StyledButton";
import StyledDiv from "../styles/shared/StyledDiv";
import styled from "styled-components"
import { postItem } from "../services/API";

export default function PostItem() {
    const [product, setProduct] = useState()
    const [size, setSize] = useState()
    const [img, setImg] = useState()
    const [value, setValue] = useState()
    const [amount, setAmount] = useState()

    function createItem(e){
        e.preventDefault()
        const body={
            product,
            size,
            img,
            value:Number(value),
            amount:Number(amount)
        }
        console.log(body)
        postItem(body)
        .then((res)=>{
            alert("Adicionado com sucesso")
            setProduct("")
            setSize("")
            setImg("")
            setValue("")
            setAmount("")
        })
        .catch((err)=>{
            console.error(err)
        })
    }
  
    return (
        <>
          <StyledForm onSubmit={createItem}>
    
            <div className="inputs">
              <input type="text" 
              placeholder="produto" 
              value={product}
            onChange={(e) => {
              setProduct(e.target.value);
            }} required />
              <input type="text" 
              placeholder="Tamanho"
              value={size}
            onChange={(e) => {
              setSize(e.target.value);}}
              required />
              <input type="text"
              placeholder="URL da imagem" 
              value={img}
            onChange={(e) => {
              setImg(e.target.value);}}
              required />
              <input type="text"
               placeholder="valor"
               value={value}
            onChange={(e) => {
              setValue(e.target.value);}}
                required />
              <input type="text" 
              placeholder="estoque" 
              value={amount}
            onChange={(e) => {
              setAmount(e.target.value);}}
              required />
            </div>
            <StyledDiv>
              <StyledButton type="submit">Enviar</StyledButton>
            </StyledDiv>
          </StyledForm>
        </>
    )
  }

  const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;

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