import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthCtx } from '../../store/AuthProvider';
import { auth } from '../../firebase/firebase';

function Logout() {
  const { isLoggedIn, logout, navTo } = useAuthCtx();

  function logoutUserFire() {
    signOut(auth)
      .then(() => {
        logout();
        navTo('login');
      })
      .catch((error) => {});
  }

  return !isLoggedIn ? null : <button onClick={logoutUserFire}>Logout</button>;
}

export default Logout;
