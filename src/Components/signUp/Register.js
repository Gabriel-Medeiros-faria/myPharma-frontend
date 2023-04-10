import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const body = {
    email,
    password,
    name,
  };

  function CreateUser(e) {
    e.preventDefault();
    setLoading(true)
    axios
      .post(`https://mypharma-api.onrender.com/user`, body)
      .then((resp) => {
        navigate("/")
        setLoading(false)
      })
      .catch((err) => {
        alert(err.response.data.name)
        setLoading(false)
      });
  }

  return (
    <>
      <Container>
        <RegistrationFields>
          <form onSubmit={CreateUser}>
            <input
              placeholder="E-mail"
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
            <input
              placeholder="Senha"
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
            <input
              placeholder="Nome"
              type={"text"}
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
            <button className="Register" type="submit">
              {loading ? (
                <img src="https://raw.githubusercontent.com/Gabriel-Medeiros-faria/projeto11-trackit/main/src/img/cartoon-snail-loading-loading-gif-animation_2734139.gif"></img>
              ) : (
                "Cadastrar"
              )}
            </button>
          </form>
        </RegistrationFields>
        <Link to={"/"}>
          <GoToLoginPage>Já tem uma conta? Faça login</GoToLoginPage>
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

const RegistrationFields = styled.div`
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
  .Register {
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
const GoToLoginPage = styled.div`
  color: #52b6ff;
  text-decoration: underline;
  font-size: 20px;
  cursor: pointer;
`;
