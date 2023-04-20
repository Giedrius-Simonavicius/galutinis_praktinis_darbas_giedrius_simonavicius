import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';

const AuthContext = createContext({
  user: {},
  login() {},
  register() {},
});
AuthContext.displayName = 'AuthContext';

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

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

  const authCtx = {
    user,
    register,
    login,
  };
  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuthCtx() {
  return useContext(AuthContext);
}
