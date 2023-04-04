import styled from "styled-components";
import Login from "../../Components/signIn/Login";
import LogoMyPharma from "../../Components/signIn/LogoMyPharma";

export default function SignInPage() {
  return (
    <>
      <SignInPageContainer>
        <LogoMyPharma/>
        <Login />
      </SignInPageContainer>
    </>
  );
}

const SignInPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  @media (max-width: 700px) {
      flex-direction: column;
      justify-content: space-evenly;
    }
`;
