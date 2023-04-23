import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from '@firebase/auth';
import { auth, googleProvider } from '../firebase/firebase';
import { useAuthCtx } from '../store/AuthProvider';
import { NavLink } from 'react-router-dom';

function LoginPage() {
  const { navTo, setIsLoading, ui } = useAuthCtx();
  setIsLoading(true);

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

        ui.showError('Email or password incorrect');
        setIsLoading(false);
      });
  }
  function loginWithGoogle() {
    //
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        navTo('shops');
        ui.showSuccess('Logged in');
      })
      .catch((error) => {
        ui.showError('Failed to login');
        setIsLoading(false);
      });
  }
  setIsLoading(false);
  return (
    <div className="mainForm">
      <div className="innerForm container">
        <h1>Sign in</h1>
        <LoginForm
          onUserLogin={loginToFirebase}
          loginWithGoogle={loginWithGoogle}
        />

        <div className="flex comment">
          <p>Not a member yet? </p>
          <NavLink className="linkAfterComment" to={'/register'}>
            click here to sign up
          </NavLink>
        </div>
        <div className="tac">
          <p className="or">Or</p>
          <button className="loginGoogle" onClick={loginWithGoogle}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/30px-Google_%22G%22_Logo.svg.png"
              alt="google"
            />
            <span className="googl">Log in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
