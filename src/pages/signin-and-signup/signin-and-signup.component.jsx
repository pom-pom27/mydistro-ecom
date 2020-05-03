import React from "react";
import styles from "./signin-and-signup.module.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndUp = () => (
  <div className={styles.SignInAndUp}>
    <SignIn />
    <SignUp />
  </div>
);
export default SignInAndUp;
