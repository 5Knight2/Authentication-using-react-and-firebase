import React, { useState, useEffect } from 'react';
import AuthContext from './auth-context';

const AuthProvider = (props) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    console.log('Token updated:', token);
  }, [token]);

  const setTokenHandler = (data) => {
    setToken(data);
    console.log('Setting Token:', data);
  };

  const logoutHandler = () => {
    setToken('');
  };

  const auth = {
    token: token,
    getToken: setTokenHandler,
    logOut: logoutHandler,
    loggedIn: !!token, // derive loggedIn from token
  };

  return (
    <AuthContext.Provider value={auth}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
