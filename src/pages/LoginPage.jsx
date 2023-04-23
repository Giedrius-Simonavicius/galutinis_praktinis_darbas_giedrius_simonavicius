import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../firebase/firebase';
import { useAuthCtx } from '../store/AuthProvider';
import { NavLink } from 'react-router-dom';

function LoginPage() {
  const { navTo, isLoggedIn, setIsLoading, ui } = useAuthCtx();

  function loginToFirebase({ email, password }) {
    ui.showLoading();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(false);
        navTo('shops');
        ui.showSuccess('Logged in');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorMessage ===', errorMessage);
        ui.showError('Email or password incorrect');
        setIsLoading(false);
      });
  }
  return (
    <div className="mainForm">
      <div className="innerForm container">
        <h1>Sign in</h1>
        <LoginForm onUserLogin={loginToFirebase} />
        <div className="flex comment">
          <p>Not a member yet? </p>
          <NavLink className="linkAfterComment" to={'/register'}>
            click here to sign up
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
