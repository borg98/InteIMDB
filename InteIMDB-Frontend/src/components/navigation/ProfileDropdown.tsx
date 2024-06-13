import { NavLink } from "react-router-dom";
import "../../styles/_animations.scss";

interface IProfileDropdownProps {
  profileDropdownRef: React.MutableRefObject<HTMLDivElement | null>;
  showDropdown: boolean;
}

const ProfileDropdown = (props: IProfileDropdownProps) => {
  return (
    <section
      ref={props.profileDropdownRef}
      className="navigation__dropdown-container navigation__dropdown-container--profile"
    >
      <ul className="navigation__dropdown navigation__dropdown--profile">
        <li className="navigation__dropdown--profile-logout">
          <NavLink to="/">Log Out</NavLink>
        </li>
      </ul>
    </section>
  );
};

export default ProfileDropdown;
