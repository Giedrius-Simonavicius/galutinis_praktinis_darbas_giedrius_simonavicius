import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthCtx } from '../../store/AuthProvider';
import { auth } from '../../firebase/firebase';

function Logout() {
  const { isLoggedIn, navTo } = useAuthCtx();

  function logoutUserFire() {
    console.log('logout pasileido');
    navTo('login');
    signOut(auth)
      .then(() => {
        isLoggedIn(false);
      })
      .catch((error) => {});
  }

  return !isLoggedIn ? null : <button onClick={logoutUserFire}>Logout</button>;
}

export default Logout;
