import { NavLink } from "react-router-dom";
import "../../styles/_animations.scss";
import { useContext } from "react";
import { SupabaseContext } from "../../context/SupabaseContext";

interface IProfileDropdownProps {
  profileDropdownRef: React.MutableRefObject<HTMLDivElement | null>;
  showDropdown: boolean;
}

const ProfileDropdown = (props: IProfileDropdownProps) => {
  const supabase = useContext(SupabaseContext);
  return (
    <section
      ref={props.profileDropdownRef}
      className="navigation__dropdown-container navigation__dropdown-container--profile"
    >
      <ul className="navigation__dropdown navigation__dropdown--profile">
        <li className="navigation__dropdown--profile-logout">
          <NavLink
            onClick={() => {
              supabase?.auth.signOut();
            }}
            to="/"
          >
            Log Out
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default ProfileDropdown;
