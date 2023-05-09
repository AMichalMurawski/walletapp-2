import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectorEmail,
  selectAccessToken,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  const email = useSelector(selectorEmail);
  const accessToken = useSelector(selectAccessToken);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    email,
    accessToken,
  };
};
