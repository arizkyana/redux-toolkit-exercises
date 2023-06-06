import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

function Auth(props) {
  const { children } = props;
  const { user } = useSelector((state) => state.login);
  const [mounted, setMounted] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    setMounted(true);
  }, [user]);

  return mounted ? children : <span />;
}

export default Auth;
