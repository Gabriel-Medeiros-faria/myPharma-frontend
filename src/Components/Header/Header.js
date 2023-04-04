import { useNavigate } from "react-router";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "../Cart/Cart";
import { useState } from "react";
import {SlArrowDown} from 'react-icons/sl'
import LogOut from "./logOut";
import useUser from "../../Hooks/useUser";

export default function Header() {
  const navigate = useNavigate();
  const [openCart, setOpenCart] = useState(false);
  const [openLogOut, setOpenLogOut] = useState(false)
  const {user} = useUser()
  const [nameUser, setNameUser] = useState(user.name)

  function OpenOrCloseLogOutBox(){
    if(!openLogOut) setOpenLogOut(true)
    if(openLogOut) setOpenLogOut(false)
  }

  return (
    <>
      <HeaderContainer>
        <p className="nameUser">{nameUser}</p>
        <SlArrowDown className="logoutArrow" onClick={()=> OpenOrCloseLogOutBox()}/>
        {openLogOut? <LogOut/>: ''}
        <img
          src="https://www.mypharma.com.br/imgs/Logo%20my%20pharma-desk.svg"
          alt="Logo"
          onClick={() => navigate("/homePage")}
          className="logoMyPharma"/>
        <AiOutlineShoppingCart className="cart" onClick={()=> setOpenCart(true)}/>
        {openCart ? (
          <Cart setOpenCart={setOpenCart}/>
        ) : (
          ""
        )}
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: #52b6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  position: fixed;
  z-index: 10;
  .cart {
    color: white;
    position: absolute;
    right: 30px;
    font-size: 23px;
    cursor: pointer;
  }

  .logoMyPharma {
    width: 250px;
    animation: float 2s ease-in-out infinite;
    cursor: pointer;
    @keyframes float {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
  }

  .logoutArrow{
    position: absolute;
    left: 80px;
    color: white;
    cursor: pointer;
    @media (max-width: 700px) {
      bottom:10px;
      left: 30px;
    }
  }

  .nameUser{
    color: white;
    position: absolute;
    left: 20px;
  }
`;
