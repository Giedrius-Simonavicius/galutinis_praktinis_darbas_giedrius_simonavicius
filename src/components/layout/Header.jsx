import { NavLink, Link } from "react-router-dom";
import "./header.scss";
function Header() {
  return (
    <header>
      <div className="head container flex between">
        <Link to={"/"}>/ S H O P S \_ /\ _/ L O G O \</Link>
        <nav className="navigation flex">
          <NavLink className={"navItem"} to={"/"}>
            Home
          </NavLink>
          <NavLink className={"navItem"} to={"/login"}>
            Login
          </NavLink>
          <NavLink className={"navItem"} to={"/register"}>
            Register
          </NavLink>
          <NavLink className={"navItem"} to={"/shops"}>
            Shops
          </NavLink>
          <NavLink className={"navItem"} to={"/shops/new"}>
            Add shop
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
