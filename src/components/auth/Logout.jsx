import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthCtx } from '../../store/AuthProvider';
import { auth } from '../../firebase/firebase';

function Logout() {
  const { isLoggedIn, navTo, ui } = useAuthCtx();

  function logoutUserFire() {
    console.log('logout pasileido');
    signOut(auth)
      .then(() => {
        isLoggedIn(false);
        ui.showSuccess('Logged out');
        navTo('login');
      })
      .catch((error) => {});
  }

  return <button onClick={logoutUserFire}>Logout</button>;
}

export default Logout;
