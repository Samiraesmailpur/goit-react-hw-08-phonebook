import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LabelBtn, InputFilter, Title } from './Filter.styled';
import { updateFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { IoIosContact } from 'react-icons/io';

const Filter = () => {
  const stateFilter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  return (
    <>
      <Title>
        Contacts <IoIosContact style={{ marginLeft: '10' }} />
      </Title>
      <LabelBtn style={{ color: '#fff' }}>
        Find contacts by name
        <InputFilter type="text" value={stateFilter} onChange={changeFilter} />
      </LabelBtn>
    </>
  );
};

export default Filter;
