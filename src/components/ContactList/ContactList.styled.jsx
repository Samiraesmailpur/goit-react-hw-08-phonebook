import styled from 'styled-components';

const Contacts = styled.ul`
  width: 400px;
  margin: 0 auto;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid #0d47a1;
  padding: 15px;
  justify-content: space-between;
  background-color: #fff;
`;

const ContactText = styled.p`
  margin-right: 10px;
  color: #0d47a1;
  font-size: 16px;
  font-weight: 700;
`;

const DeleteBtn = styled.button`
  background-color: #fff;
  display: inline-block;
  border: navajowhite;
  padding: 5px 5px;
  height: 100%;
  cursor: pointer;
  border-radius: 5px;
  color: #0d47a1;
  border: 1px solid #0d47a1;
  transition: 300ms;

  :hover {
    background-color: #0d47a1;
    color: #fff;
  }
`;

export { Contacts, ContactItem, ContactText, DeleteBtn };
