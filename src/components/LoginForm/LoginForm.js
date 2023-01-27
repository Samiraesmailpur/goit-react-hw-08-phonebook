import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import * as yup from 'yup';
import { Login, LoginInput, LoginButton, Text } from './LoginForm.styled';

const scheme = yup.object().shape({
  email: yup.string().email('Enter a valid email address').required(),
  password: yup.string().min(4).max(12).required(),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
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
      <Login>
        <Text>Email</Text>
        <LoginInput type="email" name="email" placeholder="Your email" />
        <ErrorMessage name="email" component="div" />

        <Text>Password</Text>
        <LoginInput
          type="password"
          name="password"
          placeholder="Your password"
        />
        <ErrorMessage name="password" component="div" />

        <LoginButton type="submit">Log in</LoginButton>
      </Login>
    </Formik>
  );
};
