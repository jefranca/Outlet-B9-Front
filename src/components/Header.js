import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { deleteSession } from "../services/API";

export default function Header() {
  const navigate = useNavigate();
  const { login, setLogin } = useContext(UserContext);
  console.log(login);

  function logout(){
    deleteSession(login.token)
    .then((res)=>{
        alert("Deslogado com Sucesso")
        localStorage.clear()
    })
    .catch((err)=>{
        console.error(err)
    })
  }

  return (
    <HeadBox>
      {login ? (
        <div className="login" >
          <p>{login.user.name}</p>
          <p onClick={logout}>Deslogar</p>
        </div>
      ) : (
        <div className="login" onClick={() => navigate("/sign-in")}>
          Login
        </div>
      )}

      <div
        className="title"
        onClick={() => {
          navigate("/");
        }}
      >
        Outlet B9
      </div>
      <div className="cart">
        <BsFillCartFill />
      </div>
    </HeadBox>
  );
}

const HeadBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  position: fixed;
  left: 0;
  top: 0;

  & .login {
    font-size: 20px;
  }

  & .title {
    font-size: 66px;
    font-family: "Whisper", cursive;
  }
  & .cart {
    font-size: 20px;
  }
`;
