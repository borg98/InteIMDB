import { NavLink } from "react-router-dom";

const HamburgerMenu = () => {
  return (
    <ul className="navigation__dropdown navigation__dropdown--hamburger">
      <li>
        <NavLink to="/movies">Movies</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/checkout">Checkout</NavLink>
      </li>
    </ul>
  );
};

export default HamburgerMenu;
