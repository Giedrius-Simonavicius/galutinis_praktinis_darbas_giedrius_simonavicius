import { NavLink, Link } from 'react-router-dom';
import './header.scss';
import { useAuthCtx } from '../../store/AuthProvider';
import Logout from '../auth/Logout';
function Header() {
  const { isLoggedIn } = useAuthCtx();

  return (
    <header className="mainHeader">
      <div className="head container flex between">
        <Link className="logo" to={'/'}>
          <span className="logoOur">O U R</span>
          <i className="fa fa-building ico1" aria-hidden="true"></i>
          <i className="fa fa-building ico3" aria-hidden="true"></i>
          <i className="fa fa-building-o ico2" aria-hidden="true"></i>S H O P S
        </Link>
        <nav className="navigation flex">
          {!isLoggedIn && (
            <NavLink className={'navItem'} to={'/login'}>
              Login
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink className={'navItem'} to={'/register'}>
              Register
            </NavLink>
          )}

          {isLoggedIn && (
            <NavLink className={'navItem'} to={'/shops'}>
              Shops
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink className={'navItem'} to={'/shops/new'}>
              Add shop
            </NavLink>
          )}
        </nav>
        {isLoggedIn && (
          <>
            <Logout />
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
