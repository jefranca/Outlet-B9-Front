import Header from "../components/Header";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getItems } from "../services/API";
import ItemCard from "../components/ItemCard";

export default function Home() {
  const [items, setItems] = useState();

  useEffect(() => {
    getItems().then((res) => {
      setItems(res.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <ItemsBox>
        {items ? (
          items.map((item) => <ItemCard item={item} />)
        ) : (
          <>Carregando...</>
        )}
      </ItemsBox>
    </div>
  );
}

const ItemsBox = styled.div`
  margin-top: 120px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
