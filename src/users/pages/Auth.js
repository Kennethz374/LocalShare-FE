import React, { useState, useContext } from "react";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/auth-context";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElement/Card";
import Button from "../../shared/components/FormElements/Button";

import "./Auth.css";

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm({
    email: {
      value: "",
      isValid: false
    },
    password: {
      value: "",
      isValid: false
    }
  });

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };
  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login();
  };

  return (
    <Card className="authenticaiton">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name"
            onInput={inputHandler}
          />
        )}
        <Input
          id="Email"
          element="input"
          type="E-Mail"
          label="Email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address"
          onInput={inputHandler}
        />
        <Input
          id="password"
          type="password"
          element="input"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter valid description with at least 5 characters"
          onInput={inputHandler}
        />
        <Button type="submit">
          {isLoginMode ? "Login" : "Sign Up"}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        Switch To {isLoginMode ? "Sign up" : "Login"}
      </Button>
    </Card>
  );
};

export default Auth;
