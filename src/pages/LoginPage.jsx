import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../firebase/firebase';
import { useAuthCtx } from '../store/AuthProvider';

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
    <div className="container">
      <h1>Login</h1>
      <LoginForm onLogin={loginToFirebase} />
    </div>
  );
}

export default LoginPage;
