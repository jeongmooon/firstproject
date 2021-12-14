import React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";
import TextComponent from "./text/TextComponent";
import RoundedButtonComponent from "./button/RoundedButtonComponent";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavbarBlock = styled.div`
  padding: 1rem 0;
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  background: white;
`;

const NavbarWrapper = styled(Responsive)`
  display: flex;
  justify-content: space-between;

  .left {
    display: flex;
    align-items: center;
  }
  .right {
    display: flex;
  }
`;

const NavbarLogo = styled.img`
  width: 8rem;
  margin-right: 1rem;
  /* font-size: 1.3rem;
  color: grey;
  font-weight: bolder; */
`;

const NavbarText = styled(TextComponent)`
  color: #555555;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  font-weight: 400;
`;

const SignInButton = styled(RoundedButtonComponent)`
  color: #ed6653;
  border-color: #ed6653;
  background-color: #ffffff;
`;

const SignUpButton = styled(RoundedButtonComponent)`
  color: #ffffff;
  border-color: #ed6653;
  background-color: #ed6653;
`;

const DownArrowIconsBlock = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.5rem;
`;

const DownArrowIcon = styled(MdKeyboardArrowDown)``;

function NavbarComponent() {
  return (
    <NavbarBlock>
      <NavbarWrapper>
        <div className="left">
          <NavbarLogo
            src={
              "https://careerly.co.kr/_next/static/images/img-logo-789fb5a9000960c8e86ed6e1a0f54a2f.png"
            }
          />
          <DownArrowIconsBlock>
            <DownArrowIcon size="15" />
          </DownArrowIconsBlock>

          <NavbarText>프로필 탐색</NavbarText>
          <NavbarText>인턴 채용공고</NavbarText>
        </div>
        <div className="right">
          <SignInButton to="/signin">로그인</SignInButton>
          <SignUpButton to="/signup">회원가입</SignUpButton>
        </div>
      </NavbarWrapper>
    </NavbarBlock>
  );
}

export default NavbarComponent;
