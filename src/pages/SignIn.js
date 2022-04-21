import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { postSignIn } from '../services/API';
import UserContext from '../context/UserContext';
import { saveToLocalStorage } from '../utils/localStorage';
import StyledDiv from '../styles/shared/StyledDiv';
import StyledButton from '../styles/shared/StyledButton';
import StyledText from '../styles/shared/StyledText';

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, setLogin } = useContext(UserContext);

  useEffect(() => {
    if (login) navigate('/');
  }, [login, navigate]);

  function signIn(e) {
    e.preventDefault();
    const body = { email, password };
    postSignIn(body)
      .then((res) => {
        alert('Logado com Sucesso');
        saveToLocalStorage(res.data);
        setLogin(res.data);
        navigate('/plans');
      })
      .catch((error) => {
        if (error.response.status === 403) alert('Senha Incorreta');
        else if (error.response.status === 404) alert('E-mail não cadastrado');
        else alert('Erro Desconhecido');
      });
  }
  return (
    <>
    <StyledTitle> <p>Bem vindo ao Outlet B9</p></StyledTitle>

      <StyledForm onSubmit={signIn}>
        <div className="inputs">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); }}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => { setPassword(e.target.value); }}
            required
          />
        </div>
        <StyledDiv>
          <StyledButton type="submit">Login</StyledButton>
          <StyledText onClick={() => navigate('/sign-up')}>Criar conta</StyledText>
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
    margin-top: 100px;
    justify-content: space-between;
    align-items: center;
    & .inputs{
        display: flex;
        flex-direction: column;
        height: 289px;
        & input{
            margin-bottom: 9px;
        }
    }
    & input{
        width: 325px;
        height: 64px;
        border:none;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 10px;
        font-size: 25px;
        font-weight: 500;
    }
`;