import { NavLink } from "react-router-dom";

const ProfileDropdown = () => {
  return (
    <ul className="navigation__dropdown navigation__dropdown--profile">
      <li className="navigation__link-logout">
        <NavLink to="/">Log Out</NavLink>
      </li>
    </ul>
  );
};

export default ProfileDropdown;
