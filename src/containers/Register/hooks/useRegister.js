import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  registerStart,
  registerSuccess,
  registerFailure,
} from '../../../redux/register/slice';

import network from '../../../utils/network';

function useRegister() {
  const register = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   *
   * @param credentials
   * @value email: string
   * @value password: string
   */
  const doRegister = async (credentials) => {
    try {
      dispatch(registerStart());
      const response = await network.post(
        'customer/auth/register',
        credentials
      );
      dispatch(registerSuccess(response.data));
      navigate('/login');
    } catch (error) {
      dispatch(registerFailure());
    }
  };

  return {
    register,
    doRegister,
  };
}

export default useRegister;
