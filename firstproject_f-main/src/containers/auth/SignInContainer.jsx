import React, { useState } from "react";
import SignInComponent from "../../components/auth/SignInComponent";
import { useNavigate } from "react-router-dom";
import client from "../../libs/styles/api/clienet";

function SignInContainer({ setUser, setIsLoggined }) {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const onClickSubmit = async (e) => {
    if (userInfo.email === "" && userInfo.password === "") {
      return alert("정보를 입력하세요");
    } else {
      if (userInfo.email === "") {
        return alert("이메일을 입력하세요");
      }
      if (userInfo.password === "") {
        return alert("비밀번호 입력하세요");
      }
      const data = {
        email: userInfo.email,
        password: userInfo.password,
      };
      try {
        const response = await client.post("/auth/singin", data);

        if (response.status === 200) {
          const { accessToken } = response.data;
          localStorage.setItem("accessToken", accessToken); //setItem 넣기 getItem 빼기
          client.defaults.headers.common["Authorization"] = `${accessToken}`;

          const result = await client.get("/users");
          const targetUser = result.data.data;
          console.log(targetUser);
          setUser(targetUser);
          setIsLoggined(true);

          alert("로그인 완료");
          navigate("/");
        }
      } catch (error) {
        console.log(error);
        if (error.response.status === 400) {
          alert("존재 하지 않는 계정입니다");
          setUserInfo({
            email: "",
            password: "",
          });
        }
        if (error.response.status === 401) {
          alert("비밀번호 틀림");
          setUserInfo({
            email: "",
            password: "",
          });
        }
      }
    }
  };

  return (
    <SignInComponent
      userInfo={userInfo}
      onClickSubmit={onClickSubmit}
      onChangeInput={onChangeInput}
    />
  );
}

export default SignInContainer;
