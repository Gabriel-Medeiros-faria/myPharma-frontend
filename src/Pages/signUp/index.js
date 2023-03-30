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
justify-content: end;
height: 100vh;
`;
