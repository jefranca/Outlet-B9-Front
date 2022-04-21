import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../context/UserContext";

export default function ItemCard({ item }) {
  const navigate = useNavigate();
  const { setItem } = useContext(UserContext);

  return (
    <Card>
      <img src={item.img} />
      <div>
        <p>{item.product}</p>
        <p>{item.size}</p>
        <p>R${item.value}</p>
        <button
          onClick={() => {
            setItem(item);
            navigate("/payment");
          }}
        >
          Comprar
        </button>
      </div>
    </Card>
  );
}

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
