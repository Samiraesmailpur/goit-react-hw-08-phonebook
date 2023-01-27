import { Form, Field } from 'formik';
import styled from 'styled-components';

const Register = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 40px;
  border: 1px solid #fff;
  margin: 0 auto;
  margin-top: 30px;
`;

const RegisterInput = styled(Field)`
  padding: 10px;
  margin-bottom: 20px;
`;

const RegisterButton = styled.button`
  background-color: #fff;
  border: none;
  color: white;
  padding: 15px 32px;
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

export { Register, RegisterInput, RegisterButton, Text };
