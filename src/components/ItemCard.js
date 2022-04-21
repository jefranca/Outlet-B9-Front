import styled from "styled-components";

export default function ItemCard({ item }) {
  console.log(item);
  return (
    <Card>
      <img src={item.img} />
      <div>
        <p>{item.product}</p>
        <p>{item.size}</p>
        <button>Comprar</button>
      </div>
    </Card>
  );
}

const Card = styled.div`
  width: 400px;
  height: 200px;
  background-color: #FFFFFF;
  margin: 15px;
  display: flex;
  justify-content: space-between;
      border-radius: 10px ;

  & img{
      width: 200px;
      height: 200px;
      border-radius: 10px 0px 0px 10px;
  }

  & div{
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      justify-content: space-around;
      align-items: center;
  }
`;
