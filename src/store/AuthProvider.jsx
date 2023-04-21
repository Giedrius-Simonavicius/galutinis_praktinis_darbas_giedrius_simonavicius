import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({
  user: {},
  login() {},
  register() {},
  navTo() {},
  isLoggedIn: false,
});
AuthContext.displayName = 'AuthContext';

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const isLoggedIn = !!user;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log('prisijungimas', user.email);
        setUser(user);
      } else {
        console.log('Logout User');
        setUser(null);
      }
    });
  }, []);

  function login(userObj) {
    setUser(userObj);
  }

  function register(userObj) {
    setUser(userObj);
  }
  function navTo(whereTo) {
    navigate(`/${whereTo}`);
  }

  const authCtx = {
    user,
    register,
    login,
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
