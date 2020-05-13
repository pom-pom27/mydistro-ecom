import React, { useState } from "react";
import { signUpSc, titleSc } from "./sign-up.module.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfile } from "../../firebase/firebase.utils";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password didn't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfile(user, { displayName });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleChanges(e) {
    const { name, value } = e.target;

    switch (name) {
      case "displayName":
        setDisplayName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        setConfirmPassword(value);
        break;
    }
  }

  return (
    <div className={signUpSc}>
      <h2 className={titleSc}>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className={signUpSc} onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChanges={handleChanges}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChanges={handleChanges}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChanges={handleChanges}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChanges={handleChanges}
          label="Confirm password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
