import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {Login} = useContext(AuthContext)
  const body = {
    email,
    password,
  };

  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate("/homePage");
    }
  }, [navigate]);

  function LoginUser(e) {
    e.preventDefault();
    axios
      .post(`https://mypharma-api.onrender.com/auth`, body)
      .then((resp) => {
        Login(resp.data)
        navigate("/homePage")
      })
      .catch((err) => alert(err.response.data.name));
  }

  return (
    <>
      <Container>
        <CamposLogin>
          <form onSubmit={LoginUser}>
            <input
              placeholder="E-mail"
              type={"email"}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
            <input
              placeholder="Senha"
              type={"password"}
              name="senha"
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
            <button className="login" type="submit">
              Entrar
            </button>
          </form>
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
  @media (max-width: 700px) {
      width: 100%;
      height: 60%;
      justify-content: start;
    }
`;

const CamposLogin = styled.div`
  form {
    display: flex;
    flex-direction: column;
    @media (max-width: 700px) {
      margin-top: 30px;
    }
  }

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
    border: none;
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
