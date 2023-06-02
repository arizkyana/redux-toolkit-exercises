import { useDispatch, useSelector } from 'react-redux';

import {
  loginStart,
  loginSuccess,
  loginFailure,
} from '../../../redux/login/slice';

import network from '../../../utils/network';

function useLogin() {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  /**
   *
   * @param credentials
   * @value email: string
   * @value password: string
   */
  const doLogin = async (credentials) => {
    try {
      dispatch(loginStart());
      const response = await network.post('customer/auth/login', credentials);
      dispatch(loginSuccess(response.data));
    } catch (error) {
      dispatch(loginFailure());
    }
  };

  return {
    login,
    doLogin,
  };
}

export default useLogin;
