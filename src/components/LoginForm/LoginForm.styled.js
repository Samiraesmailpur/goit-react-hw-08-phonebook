import { Form, Field } from 'formik';
import styled from 'styled-components';

const Login = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 40px;
  border: 1px solid #fff;
  margin: 0 auto;
  margin-top: 30px;
`;

const LoginInput = styled(Field)`
  padding: 10px;
  margin-bottom: 20px;
`;

const LoginButton = styled.button`
  background-color: #fff;
  border: none;
  color: white;
  padding: 10px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  min-width: 100px;
  cursor: pointer;
  margin: 10px auto;
  color: #0d47a1;
  font-weight: 600;
`;

const Text = styled.label`
  color: #ffff;
  margin-bottom: 10px;
`;

export { Login, LoginInput, LoginButton, Text };
