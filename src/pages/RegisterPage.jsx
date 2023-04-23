import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import '../styles/formPage.scss';
import { NavLink } from 'react-router-dom';
import { useAuthCtx } from '../store/AuthProvider';

function RegisterPage() {
  const { navTo, setIsLoading, ui } = useAuthCtx();

  function registerToFirebase({ email, password }) {
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(false);
        ui.showSuccess('Registration succesfull');
        navTo('shops');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        ui.showError('Something went wrong');
        setIsLoading(false);
      });
  }
  return (
    <div className="mainForm">
      <div className="container innerForm">
        <h1>Registration</h1>
        <RegisterForm onUserRegistration={registerToFirebase} />
        <div className="flex comment">
          <p>Already registered? </p>
          <NavLink className="linkAfterComment" to={'/login'}>
            sign in
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
