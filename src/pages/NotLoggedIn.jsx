import '../styles/formPage.scss';
import { useAuthCtx } from '../store/AuthProvider';
import { useState } from 'react';
function NotLoggedIn() {
  const { navTo } = useAuthCtx();
  const [timer, setTimer] = useState(10);

  setTimeout(() => {
    navTo('login');
  }, 10000);

  setTimeout(() => {
    setTimer(timer - 1);
  }, 1000);

  return (
    <div className="mainForm tac">
      <h1 className="unauthorised ">
        <i class="fa fa-exclamation-triangle warning" aria-hidden="true"></i>
        Unauthorized access detected
        <i class="fa fa-exclamation-triangle warning" aria-hidden="true"></i>
      </h1>
      <h2>User must be logged in to access ! </h2>
      <h3>Redirecting to login page in: {timer}</h3>
    </div>
  );
}

export default NotLoggedIn;
