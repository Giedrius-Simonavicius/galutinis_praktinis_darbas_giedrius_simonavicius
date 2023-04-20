import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import { useAuthCtx } from '../store/AuthProvider';
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';

function RegisterPage() {
  const { register } = useAuthCtx();
  function registerToFirebase({ email, password }) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        register(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorMessage ===', errorMessage);
      });
  }
  return (
    <div className="container">
      RegisterPage
      <RegisterForm onReg={registerToFirebase} />
    </div>
  );
}

export default RegisterPage;
