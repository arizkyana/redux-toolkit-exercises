function Auth() {
  const setAuth = (user) => {
    localStorage.setItem('auth', JSON.stringify(user));
  };

  const getAuth = () => {
    const userStorage = localStorage.getItem('auth');
    return JSON.parse(userStorage);
  };

  const getToken = () => {
    const auth = getAuth();
    return auth.access_token;
  };

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return {
    setAuth,
    getAuth,
    getToken,
    logout,
  };
}

export default Auth();
