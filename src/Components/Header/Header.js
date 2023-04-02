import { useNavigate } from "react-router";
import styled from "styled-components";
import {AiOutlineShoppingCart} from "react-icons/ai";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <HeaderContainer>
        <img
          src="https://www.mypharma.com.br/imgs/Logo%20my%20pharma-desk.svg"
          alt="Logo"
          onClick={() => navigate("/homePage")}
        />
        <AiOutlineShoppingCart className="cart"/>
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
  .cart{
    color: white;
    position: absolute;
    right: 30px;
    font-size: 23px;
    cursor: pointer;
  }


  img {
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
`;
