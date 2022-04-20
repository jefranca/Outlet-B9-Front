import styled from "styled-components"
import { BsFillCartFill } from 'react-icons/bs';

export default function Header(){
    return (
      <HeadBox>
          <div className="login">
              Login
          </div>
        <div className="title">
            Outlet B9
        </div>
        <div className="cart">
            <BsFillCartFill/>
        </div>
      </HeadBox>
    )
  }

const HeadBox = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    background-color: #FFFFFF;
    
    & .login{
        font-size: 20px;
    }

    & .title{
        font-size: 66px;
        font-family: 'Whisper', cursive;
    }
    & .cart{
        font-size: 20px;
    }
`;