import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  color: #0d47a1;
  margin-right: 30px;
  font-weight: 700;
`;

const LogoutBtn = styled.button`
  background-color: #0d47a1;
  color: #fff;
  padding: 5px 5px;
  height: 100%;
  cursor: pointer;
  border: none;
`;

export { Div, Text, LogoutBtn };
