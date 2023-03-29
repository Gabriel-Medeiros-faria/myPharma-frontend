import styled from "styled-components";

export default function LogoMyPharma() {
  return (
    <LogoMyPharmaImg>
      <img src="https://www.mypharma.com.br/imgs/Logo%20my%20pharma-desk.svg" />
    </LogoMyPharmaImg>
  );
}

const LogoMyPharmaImg = styled.div`
  background-color: #52b6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55%;
  img {
    width: 65%;
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
`;
