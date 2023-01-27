import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import styled from 'styled-components';

const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  color: #2a363b;

  &.active {
    color: #0d47a1;
  }
`;

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && (
        <Link to="/contacts" style={{ marginLeft: '10px' }}>
          Contacts
        </Link>
      )}
    </nav>
  );
};
