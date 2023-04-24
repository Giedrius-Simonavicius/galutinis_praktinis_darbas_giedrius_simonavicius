import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthContext = createContext({
  user: {},
  isLoading: false,
  navTo() {},
  isLoggedIn: false,
  ui: {},
  feedback: {},
});
AuthContext.displayName = 'Authtentification';

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const isLoggedIn = !!user;
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState({
    show: false,
    msg: '',
    type: '',
  });
  let inactive = '';

  if (isLoading) {
    inactive = 'inactive';
  }
  const location = useLocation();
  console.log('location ===', location);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      switch (true) {
        case !!user:
          setUser(user);
          setFeedback({
            show: true,
            msg: 'User already logged in',
            type: 'info',
          });
          break;
        case !user && location.pathname === '/shops':
          setUser(user);
          setFeedback({
            show: true,
            msg: 'Must login to access "shops" page',
            type: 'error',
          });
          break;
        case !user && location.pathname === '/shops-new':
          setUser(user);
          setFeedback({
            show: true,
            msg: 'Must login to access "shops-new" page',
            type: 'error',
          });
          break;
        case !user && location.pathname === '/login':
        case !user && location.pathname === '/register':
          setUser(user);
          setFeedback({
            show: false,
            msg: '',
            type: '',
          });
          break;
        default:
          setUser(null);
          break;
      }
    });
  }, []);

  function navTo(whereTo) {
    navigate(`/${whereTo}`);
  }

  const { show, msg } = feedback;
  useEffect(() => {
    if (show === true) {
      setTimeout(() => {
        setFeedback({
          show: false,
          msg: '',
          type: '',
        });
      }, 3000);
    }
  }, [show, msg]);

  const ui = {
    showSuccess(msg = '') {
      setFeedback({
        show: true,
        msg: msg || 'Success',
        type: 'success',
      });
    },
    showError(msg = '') {
      setFeedback({
        show: true,
        msg: msg || 'Error',
        type: 'error',
      });
    },
    showLoading() {
      setFeedback({
        show: true,
        msg: 'Loading',
        type: 'loading',
      });
    },
    closeMessage() {
      setFeedback({
        show: false,
        msg: '',
        type: '',
      });
    },
  };

  const authCtx = {
    user,
    isLoading,
    setIsLoading,
    navTo,
    isLoggedIn,
    ui,
    feedback,
    inactive,
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
