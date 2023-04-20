import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import { useAuthCtx } from '../store/AuthProvider';
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import './loginPage.scss';
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
      <h2>Please fill in all fields to register</h2>
      <RegisterForm onUserRegistration={registerToFirebase} />
    </div>
  );
}

export default RegisterPage;
