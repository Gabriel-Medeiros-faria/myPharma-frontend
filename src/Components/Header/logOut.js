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
    axios.delete(`${process.env.REACT_APP_DB_URL}auth`, config) 
    .then((resp)=> {
      localStorage.clear()
      console.log(resp)
      navigate("/")
    })
    .catch((err)=> console.log(err))
  }


  return (
    <>
      <LogOutContainer onClick={()=> deleteSession()}> fasdf</LogOutContainer>
    </>
  );
}

const LogOutContainer = styled.div`
width: 200px;
height: 60px;
background-color: blue;
z-index:111111111111;
position: absolute;
left: 20px;
bottom: -40px;
`;
