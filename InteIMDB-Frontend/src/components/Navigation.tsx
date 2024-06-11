import { NavLink } from "react-router-dom";
import "../styles/components/Navigation.scss";

export function Navigation() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Log out</NavLink>
          </li>
          <li>
            <NavLink to={"/movies"}>Movies</NavLink>
          </li>
          <li>Checkout icon</li>
        </ul>
      </nav>
    </>
  );
}
