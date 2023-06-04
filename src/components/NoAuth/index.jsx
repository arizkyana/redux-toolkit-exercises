import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

function NoAuth(props) {
  const { children } = props;
  const { user } = useSelector((state) => state.login);

  const [mounted, setMounted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
    setMounted(true);
  }, [user]);

  return mounted ? <section>{children}</section> : <section />;
}

export default NoAuth;
