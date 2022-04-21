import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { BsFillCartFill } from 'react-icons/bs';

export default function Header(){
    const navigate=useNavigate();

    return (
      <HeadBox>
          <div className="login">
              Login
          </div>
        <div className="title" onClick={()=>{navigate("/")}}>
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
    position: fixed;
    left: 0;
    top:0;
    
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