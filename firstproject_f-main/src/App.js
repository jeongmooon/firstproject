import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import NavbarContainer from "./containers/common/NavbarContainer";
import GlobalStyle from "./GlobalStyle";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [isLoggined, setIsLoggined] = useState(false);

  return (
    <>
      <GlobalStyle />
      <NavbarContainer />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/signin"
          element={
            <SignInPage setIsLoggined={setIsLoggined} setUser={setUser} />
          }
        />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
