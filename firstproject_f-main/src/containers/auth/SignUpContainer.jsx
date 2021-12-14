import React, { useState } from "react";
import SignUpComponent from "../../components/auth/SignUpComponent";
import { useNavigate } from "react-router-dom";
import client from "../../libs/styles/api/clienet";

function SignUpContainer() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const onClickSubmit = async (e) => {
    //만약 비밀번호가 서로 다르면 alert("비밀번호가 서로 다릅니다")
    const { email, name, password, passwordConfirm } = userInfo;

    if (password !== passwordConfirm) {
      return alert("비밀번호가 서로 일치하지 않습니다");
    }

    const data = {
      email,
      name,
      password,
    };

    try {
      const response = await client.post("/auth/signup", data);

      if (response.status === 200) {
        alert("회원가입 완료");
        navigate("/");
      }
    } catch (error) {
      if (error.response.status === 400) {
        alert("이미 존재하는 회원 입니다");
      }
      console.log(error);
    }
  };

  return (
    <SignUpComponent
      onClickSubmit={onClickSubmit}
      userInfo={userInfo}
      onChangeInput={onChangeInput}
    />
  );
}

export default SignUpContainer;
