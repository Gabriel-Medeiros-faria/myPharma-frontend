import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
  return (
    <>
      <Container>
        <CamposLogin>
          <input placeholder="E-mail" name="email"></input>
          <input placeholder="Senha" name="senha"></input>
          <input placeholder="Nome" name="nome"></input>
          <div className="login">Entrar</div>
        </CamposLogin>
        <Link to={"/signUp"}>
          <GoToRegisterPage data-identifier="back-to-login-action">
            Não tem uma conta? Cadastre-se
          </GoToRegisterPage>
        </Link>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 45%;
  height: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

const CamposLogin = styled.div`
  display: flex;
  flex-direction: column;
  input {
    font-size: 20px;
    width: 303px;
    height: 45px;
    margin-bottom: 10px;
    border-radius: 10px;
    border-color: #dbdbdb;
  }
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #52b6ff;
    height: 55px;
    font-size: 30px;
    border-radius: 10px;
    margin-bottom: 15px;
    cursor: pointer;
  }
  img {
    width: 95px;
  }
`;
const GoToRegisterPage = styled.div`
  color: #52b6ff;
  text-decoration: underline;
  font-size: 20px;
  cursor: pointer;
`;

