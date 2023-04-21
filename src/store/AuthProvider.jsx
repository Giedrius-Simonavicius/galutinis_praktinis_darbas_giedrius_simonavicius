import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({
  user: {},

  navTo() {},
  isLoggedIn: false,
});
AuthContext.displayName = 'AuthContext';

const localTokenKey = 'LOCAL_TOKEN';

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const tokenFromStorage = localStorage.getItem(localTokenKey);
  const [token, setToken] = useState(tokenFromStorage || '');
  const isLoggedIn = !!token;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log('prisijungimas', user.token);
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
      setToken(user.accessToken);
    } else {
      localStorage.removeItem(localTokenKey);
      setToken(null);
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

export default AuthProvider;

export function useAuthCtx() {
  return useContext(AuthContext);
}
