import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import StyledDiv from "../styles/shared/StyledDiv";
import StyledText from "../styles/shared/StyledText";
import StyledButton from "../styles/shared/StyledButton";
import { postSignUp } from "../services/API";
import UserContext from "../context/UserContext";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const { login } = useContext(UserContext);

  useEffect(() => {
    if (login) navigate("/");
  }, [login, navigate]);

  function signUp(e) {
    e.preventDefault();
    if (password !== confirmedPassword)
      return alert("Confirmação de Senha Incorreta");
    const body = { name, email, password };
    postSignUp(body)
      .then((res) => {
        alert("Conta criada com Sucesso");
        navigate("/sign-in");
      })
      .catch((error) => {
        if (error.response.status === 401) alert("E-mail já cadastrado");
        else alert("Erro Desconhecido");
      });
  }
  return (
    <>
      <StyledTitle> Bem vindo ao Outlet B9</StyledTitle>
      <StyledForm onSubmit={signUp}>
        <div className="inputs">
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <input
            type="password"
            placeholder="Confirmar senha"
            value={confirmedPassword}
            onChange={(e) => {
              setConfirmedPassword(e.target.value);
            }}
            required
          />
        </div>
        <StyledDiv>
          <StyledButton type="submit">Cadastrar</StyledButton>
          <StyledText onClick={() => navigate("/sign-in")}>
            Fazer login
          </StyledText>
        </StyledDiv>
      </StyledForm>
    </>
  );
}

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 700;
  height: 100px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 60vh;
  justify-content: space-between;
  align-items: center;
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
