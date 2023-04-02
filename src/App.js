import GlobalStyle from "./Global/globalStyle";
import SignUpPage from "./Pages/signUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./Pages/signIn";
import HomePage from "./Pages/Home";
import AuthProvider from "./Context/AuthContext";
import ProductPage from "./Pages/Product";


function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/" element={<SignInPage />} />
            <Route path="/homePage" element={<HomePage />} />
            <Route path="/productPage/:id" element={<ProductPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
