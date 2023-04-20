import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import { useAuthCtx } from '../store/AuthProvider';
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import '../styles/formPage.scss';

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
    <div className="mainForm">
      <div className="container innerForm">
        <h1>Registration</h1>
        <h2>Please fill all fields to register</h2>
        <RegisterForm onUserRegistration={registerToFirebase} />
      </div>
    </div>
  );
}

export default RegisterPage;
