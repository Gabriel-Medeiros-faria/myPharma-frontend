import GlobalStyle from "./Global/globalStyle";
import SignUpPage from "./Pages/signUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./Pages/signIn";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
