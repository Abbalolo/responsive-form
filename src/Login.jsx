import React, { useState } from "react";
import styled from "styled-components";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import illustration from "./assets/illustration.png";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 90px;

  @media (max-width: 834px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Image = styled.img`
  width: 300px;
  object-fit: contain;
  display: block;

  @media (max-width: 834px) {
    display: none;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
  }
`;

const PassCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Input = styled.input`
  padding: 8px;
  width: 100%;
  border: none;
  outline: none;

  /* :focus{
    border: 1px solid blueviolet;
  } */
`;

const LoginCard = styled.div`
  padding: 70px 50px;
  width: 600px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);

  @media (max-width: 834px) {
    width: 70%;
  }
  @media (max-width: 480px) {
    width: 90%;
    padding: 50px 20px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const FormCon = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

`;

const Label = styled.label`
  font-weight:500;
  margin-bottom:5px;
`

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-top: 10px;
`;

const CheckBox = styled.input`
  margin-right: 5px;
`;

const SubmitButton = styled.button`
  width: 300px;
  border-radius: 8px;
  background: var(--Primary---1, #1575a7);
  color: #fff;
  padding: 10px;
  border: none;
  align-self: center;
  margin-top: 2em;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const EyeIcon = styled.span`
  cursor: pointer;
  color: #b1afaf;
  margin-right: 0.5em;
`;

const FlexCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FlexCon2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  font-size: 14px;
`;

const Link = styled.a`
  color: var(--Secondary---1, #f78719);
  text-align: right;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
  text-decoration: none;
`;

const Colored = styled.span`
  color: var(--Secondary---1, #f78719);
  text-decoration: underline;
`;

function Login() {
  const [toggle, setToggle] = useState(false);

  const [passwordType, setPasswordType] = useState("password");

  const togglePasswordVisibility = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
    <LoginContainer>
      <Image src={illustration} alt="illustration" />

      <LoginCard>
        <Title>Login</Title>
        <Form>
          <FormCon>
            <InputContainer>
              <Label>Login ID</Label>
              <PassCon>
                <Input type="text" placeholder="Enter Login ID" />
              </PassCon>
            </InputContainer>
            <InputContainer>
              <Label>Password</Label>
              <PassCon>
                <Input type={passwordType} placeholder="Enter Password" />
                <EyeIcon onClick={togglePasswordVisibility}>
                  {toggle ? <AiFillEyeInvisible /> : <AiFillEye />}
                </EyeIcon>
              </PassCon>
            </InputContainer>
          </FormCon>
          <CheckBoxContainer>
            <FlexCon>
              <label>
                <CheckBox type="checkbox" /> Remember Me
              </label>
              <Link href="#">Change Password</Link>
            </FlexCon>

            <label>
              <CheckBox type="checkbox" />
              Agree to
              <Colored> Terms and Conditions</Colored>
            </label>
          </CheckBoxContainer>
          <SubmitButton>Login</SubmitButton>
          <FlexCon2>
            Don’t have an account?
            <Colored> Register Here</Colored>
          </FlexCon2>
        </Form>
      </LoginCard>
    </LoginContainer>
  );
}

export default Login;
