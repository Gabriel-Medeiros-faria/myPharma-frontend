import styled from "styled-components";
import LogoMyPharma from "../../Components/signIn/LogoMyPharma";
import Register from "../../Components/signUp/Register";

export default function SignUpPage() {
  return (
    <>
      <SignUpPageContainer>
        <LogoMyPharma/>
        <Register />
      </SignUpPageContainer>
    </>
  );
}

const SignUpPageContainer = styled.div`
display: flex;
  justify-content: space-between;
  height: 100vh;
  @media (max-width: 700px) {
      flex-direction: column;
      justify-content: space-evenly;
    }
`;
