import { NavLink } from 'react-router-dom';
import '../styles/formPage.scss';
function NotFound() {
  return (
    <div className="mainForm tac">
      <h1>404 - Page not found </h1>
      <NavLink className="clickToReg" to="login">
        Go to login page
      </NavLink>
    </div>
  );
}

export default NotFound;
