import styled from "styled-components"

export default function Header(){
    return(
        <>
            <HeaderContainer>
                <img src="https://www.mypharma.com.br/imgs/Logo%20my%20pharma-desk.svg" />
            </HeaderContainer>
        </>
    )
}

const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #52b6ff;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
    width: 250px;
    animation: float 2s ease-in-out infinite;
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
`