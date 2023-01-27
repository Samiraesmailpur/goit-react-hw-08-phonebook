import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Div, Text, LogoutBtn } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Div>
      <Text>Welcome, {user.name} !</Text>
      <LogoutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutBtn>
    </Div>
  );
};
