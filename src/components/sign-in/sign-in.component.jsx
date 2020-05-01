import React, { useState } from "react";
import styles from "./sign-in.module.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setEmail("");
    setPassword("");
  }

  function handleChanges(e) {
    const { name, value } = e.target;

    name === "email" ? setEmail(value) : setPassword(value);
  }

  return (
    <div className={styles.signIn}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChanges={handleChanges}
          type="email"
          name="email"
          value={email}
          label="Email"
          required
        />
        <FormInput
          handleChanges={handleChanges}
          type="password"
          name="password"
          value={password}
          label="Password"
          required
        />
        <div className={styles.signInButtons}>
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            SIGN IN with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
