import '../styles/formPage.scss';
import { useAuthCtx } from '../store/AuthProvider';
import { useEffect, useState } from 'react';
function NotFoundPage() {
  const { navTo, isLoggedIn, user } = useAuthCtx();
  const [timer, setTimer] = useState(5);
  const whereTo = isLoggedIn ? 'shops' : 'login';

  setTimeout(() => {
    isLoggedIn ? navTo('shops') : navTo('login');
  }, 5000);
  // useEffect(() => {
  // }, [isLoggedIn, navTo]);

  setTimeout(() => {
    setTimer(timer - 1);
    console.log('whereTo ===', whereTo);
    console.log('isLoggedIn ===', isLoggedIn);
    console.log('user ===', user);
  }, 1000);

  return (
    <div className="mainForm tac">
      <h1>404 - Page not found </h1>
      <h2>Redirecting to login page in: {timer}</h2>
    </div>
  );
}

export default NotFoundPage;
