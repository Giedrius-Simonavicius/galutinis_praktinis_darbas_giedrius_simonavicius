import '../styles/formPage.scss';
import { useAuthCtx } from '../store/AuthProvider';
import { useEffect, useState } from 'react';
function NotFoundPage() {
  const { navTo, isLoggedIn } = useAuthCtx();
  const [timer, setTimer] = useState(5);
  const whereTo = isLoggedIn ? 'shops' : 'login';

  setTimeout(() => {
    isLoggedIn ? navTo('shops') : navTo('login');
  }, 5000);
  useEffect(() => {}, [isLoggedIn, navTo]);

  setTimeout(() => {
    setTimer(timer - 1);
  }, 1000);

  return (
    <div className="mainForm tac">
      <h1 className="unauthorised">404 - Page not found </h1>
      <h3>
        Redirecting to {whereTo} page in: {timer}
      </h3>
    </div>
  );
}

export default NotFoundPage;
