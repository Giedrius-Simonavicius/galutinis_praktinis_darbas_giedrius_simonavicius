import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../firebase/firebase';
import { useAuthCtx } from '../store/AuthProvider';
import { NavLink } from 'react-router-dom';

function LoginPage() {
  const { login } = useAuthCtx();
  function loginToFirebase({ email, password }) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('user ===', user);
        login(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorMessage ===', errorMessage);
      });
  }
  return (
    <div className="login">
      <div className="innerLogin container">
        <h1>Please login</h1>
        <LoginForm onUserLogin={loginToFirebase} />
        <div className="flex notRegistered">
          <p>Not registered yet? </p>
          <NavLink className="clickToReg" to={'/register'}>
            click here to sign up
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
