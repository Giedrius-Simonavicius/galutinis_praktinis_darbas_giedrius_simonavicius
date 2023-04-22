import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
const AuthContext = createContext({
  user: {},

  navTo() {},
  isLoggedIn: false,
});
AuthContext.displayName = 'AuthContext';

const localTokenKey = 'LOCAL_TOKEN';
const localEmailKey = 'LOCAL_USER_EMAIL';

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const tokenFromStorage = localStorage.getItem(localTokenKey);
  const [token, setToken] = useState(tokenFromStorage);
  const isLoggedIn = !!token;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
        console.log('user ===', user);
      } else {
        console.log('Logout User');
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem(localTokenKey, user.accessToken);
      localStorage.setItem(localEmailKey, user.email);
      setToken(user.accessToken);
    } else {
      localStorage.removeItem(localTokenKey);
      setToken(null);
      localStorage.removeItem(localEmailKey);
    }
  }, [user]);

  function navTo(whereTo) {
    navigate(`/${whereTo}`);
  }

  const authCtx = {
    user,

    navTo,
    isLoggedIn,
  };
  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;

export function useAuthCtx() {
  return useContext(AuthContext);
}
