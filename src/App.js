import GlobalStyle from "./Global/globalStyle";
import SignUpPage from "./Pages/signUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./Pages/signIn";
import HomePage from "./Pages/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/" element={<SignInPage />} />
        <Route path="/homePage" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
