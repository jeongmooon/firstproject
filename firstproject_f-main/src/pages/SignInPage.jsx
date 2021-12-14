import React from "react";
import SignInContainer from "../containers/auth/SignInContainer";

function SignInPage({ ...rest }) {
  return (
    <>
      <SignInContainer {...rest} />
    </>
  );
}

export default SignInPage;
