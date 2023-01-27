import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Register,
  RegisterInput,
  RegisterButton,
  Text,
} from './RegisterForm.styled';

const scheme = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email('Enter a valid email address').required(),
  password: yup.string().min(4).max(12).required(),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={scheme}
    >
      <Register>
        <Text>Username</Text>
        <RegisterInput type="text" name="name" placeholder="Your name" />
        <ErrorMessage name="name" component="div" />
        <Text>Email</Text>
        <RegisterInput type="email" name="email" placeholder="Your email" />
        <ErrorMessage name="email" component="div" />
        <Text>Password</Text>
        <RegisterInput
          type="password"
          name="password"
          placeholder="Your password"
        />
        <ErrorMessage name="password" component="div" />
        <RegisterButton type="submit">Register</RegisterButton>
      </Register>
    </Formik>
  );
};
