import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthCtx } from '../../store/AuthProvider';
import { auth } from '../../firebase/firebase';

function Logout() {
  const { isLoggedIn, navTo, ui } = useAuthCtx();

  function logoutUserFire() {
    signOut(auth)
      .then(() => {
        isLoggedIn(false);
        navTo('login');
        ui.showSuccess('Logged out');
      })

      .catch((error) => {});
    ui.showError('Failed to log out');
  }

  return <button onClick={logoutUserFire}>Logout</button>;
}

export default Logout;
