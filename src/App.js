import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import NaverLoginCallBack from "./elements/introMain/NaverLoginCallBack";
import KakaoLoginCallback from "./elements/introMain/KakaoLoginCallBack";
import { getCookie } from "./shared/cookie";
import Login from "./components/Login";

// pages
import Main from "./pages/Main/Main";
import Board from "./pages/Board";
import Message from "./pages/Message";
import Calender from "./pages/Calender";
import Storage from "./pages/Storage";
import Public from "./pages/Public";
import SocialLogin from "./components/SocialLogin";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const handleLogin = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
    setIsSignupModalOpen(false);
  };

  const handleSignup = () => {
    setIsSignupModalOpen(!isSignupModalOpen);
    setIsLoginModalOpen(false);
  };

  useEffect(() => {
    if (localStorage.getItem("myToken")) {
      console.log("로그인되었습니다!");
      setIsLoggedIn(true);
    } else {
      console.log("로그아웃되었습니다!");

      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  return (
    <div>
      <GlobalStyle />
      <Routes>
        {isLoggedIn ? (
          <>
            <Route
              path="/"
              element={
                <Main
                  isLoggedIn={isLoggedIn}
                  handleLogin={handleLogin}
                  handleSignup={handleSignup}
                  isLoginModalOpen={isLoginModalOpen}
                  isSignupModalOpen={isSignupModalOpen}
                />
              }
            >
              <Route path="board" element={<Board />} />
              <Route path="calender" element={<Calender />} />
              <Route path="message" element={<Message />} />
              <Route path="storage" element={<Storage />} />
            </Route>
          </>
        ) : (
          <Route
            path="/"
            element={
              <Main
                isLoggedIn={isLoggedIn}
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                isLoginModalOpen={isLoginModalOpen}
                isSignupModalOpen={isSignupModalOpen}
              />
            }
          >
            <Route path="public" element={<Public />} />
            <Route path="board" element={<Board />} />

            <Route
              path="auth/login/callback"
              element={<NaverLoginCallBack />}
            />
            <Route
              path="auth/login/kakao/callback"
              element={<KakaoLoginCallback />}
            />
          </Route>
        )}
      </Routes>
    </div>
  );
};

export default App;
