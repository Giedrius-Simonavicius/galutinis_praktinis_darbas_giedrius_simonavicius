import '../styles/formPage.scss';
import { useAuthCtx } from '../store/AuthProvider';
import { useState } from 'react';
function NotFound() {
  const { navTo } = useAuthCtx();
  const [timer, setTimer] = useState(5);

  setTimeout(() => {
    setTimer(timer - 1);
  }, 1000);
  setTimeout(() => {
    navTo('login');
  }, 5000);

  return (
    <div className="mainForm tac">
      <h1>404 - Page not found </h1>
      <h2>Redirecting to login page in: {timer}</h2>
    </div>
  );
}

export default NotFound;
