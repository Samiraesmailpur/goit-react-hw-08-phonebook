import React from 'react';
import { Formik } from 'formik';
import { ContactsForm, Input, Button, Text, Title } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import * as yup from 'yup';

const scheme = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const checkIfNameIsUnique = name => {
    return contacts.every(contact => {
      if (contact.name.toLowerCase() === name.toLowerCase()) {
        alert(`${contact.name} is already in contacts`);
        return false;
      }
      return true;
    });
  };

  const handleSubmit = (values, { resetForm }) => {
    const name = values.name;
    const number = values.number;
    if (checkIfNameIsUnique(name)) {
      dispatch(
        addContact({
          name: name,
          number: number,
        })
      );
    }
    resetForm();
  };

  const initialValues = {
    name: '',
    number: '',
  };

  return (
    <>
      <Title>Phonebook</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={scheme}
      >
        <ContactsForm>
          <Text>Name</Text>
          <Input type="text" name="name" />
          <Text>Number</Text>
          <Input type="tel" name="number" />
          <Button type="submit">Add contact</Button>
        </ContactsForm>
      </Formik>
    </>
  );
};
