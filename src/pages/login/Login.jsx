import React from "react";
import {
  LoginContainer,
  StyledImg,
  FormContainer,
  Header,
  StyledInput,
  StyledForm,
  StyledButton,
} from "./Login.style";
import { useNavigate } from "react-router-dom";
import meal from "../../assets/meal.svg";

const Login = () => {
  const navigate = useNavigate();
  const userInfo = {
    username: "Admin",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userInfo));
    navigate(-1);
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>{"<CW/>"}Reciepe</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput placeholder="Enter username" type="text" />
          <StyledInput placeholder="Password" type="password" />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
