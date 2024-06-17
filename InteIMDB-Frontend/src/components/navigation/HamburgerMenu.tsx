import { NavLink } from "react-router-dom";
import "../../styles/components/Navigation.scss";
import "../../styles/_animations.scss";

interface IHamburgerMenuProps {
  hamburgerDropdownRef: React.MutableRefObject<HTMLDivElement | null>;
  showHamburgerDropdown: boolean;
}

const HamburgerMenu = (props: IHamburgerMenuProps) => {
  return (
    <section
      ref={props.hamburgerDropdownRef}
      className="navigation__dropdown-container navigation__dropdown-container--hamburger"
    >
      <ul className="navigation__dropdown navigation__dropdown--hamburger">
        <li className="navigation__dropdown-item">
          <NavLink to="/">Movies</NavLink>
        </li>
        <li className="navigation__dropdown-item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </section>
  );
};

export default HamburgerMenu;
