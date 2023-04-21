import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import { useAuthCtx } from '../store/AuthProvider';
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import '../styles/formPage.scss';
import { NavLink } from 'react-router-dom';

function RegisterPage() {
  function registerToFirebase({ email, password }) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
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
        <RegisterForm onUserRegistration={registerToFirebase} />
        <div className="flex notRegistered">
          <p>Already registered? </p>
          <NavLink className="clickToReg" to={'/login'}>
            sign in
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
