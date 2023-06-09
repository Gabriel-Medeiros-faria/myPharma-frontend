import axios from "axios";
import styled from "styled-components";
import useUser from "../../Hooks/useUser";
import { useNavigate } from "react-router";

export default function LogOut() {
  const {user} = useUser()
  const navigate = useNavigate()

  const config = {
    headers: { "Authorization": `Bearer ${user.token}` }
}

  function deleteSession(){
    axios.delete(`https://mypharma-api.onrender.com/auth`, config) 
    .then((resp)=> {
      localStorage.clear()
      navigate("/")
    })
    .catch((err)=> console.log(err))
  }


  return (
    <>
      <LogOutContainer onClick={()=> deleteSession()}> Sair</LogOutContainer>
    </>
  );
}

const LogOutContainer = styled.div`
width: 100px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
background-color: #dfdfdf;
cursor: pointer;
z-index:111111111111;
border-radius:5px;
position: absolute;
left: 20px;
bottom: -10px;
transition: transform 0.2s ease-in-out;
:hover {
    transform: scale(1.1);
  }
  @media (max-width: 700px) {
      bottom: -25px;
      left: 5px;
    }
`;
