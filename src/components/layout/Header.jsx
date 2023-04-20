import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <Link to={"/"}>/ S H O P S \_ /\ _/ L O G O \</Link>
        <nav>
          <NavLink to={"/"}>Home page</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
          <NavLink to={"/register"}>Register</NavLink>
          <NavLink to={"/shops"}>Shops</NavLink>
          <NavLink to={"/shops/new"}>Add shop</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
