import "../../styles/components/Navigation.scss";
import { IoBagHandleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoBagHandleSharp } from "react-icons/io5";
import { Cart } from "../Cart";
import HamburgerMenu from "./HamburgerMenu";
import ProfileDropdown from "./ProfileDropdown";

export function Navigation() {
  const [showCart, setShowCart] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showHamburgerDropdown, setShowHamburgerDropdown] = useState(false);

  const cartRef = useRef<HTMLDivElement | null>(null);
  const profileDropdownRef = useRef<HTMLDivElement | null>(null);
  const hamburgerDropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleHamburgerDropdown = () => {
    setShowHamburgerDropdown(!showHamburgerDropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setShowCart(false);
      }
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
      if (
        hamburgerDropdownRef.current &&
        !hamburgerDropdownRef.current.contains(event.target as Node)
      ) {
        setShowHamburgerDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="navigation">
        <ul className="navigation__items">
          <section className="navigation__links navigation__links--hamburger">
            <li onClick={toggleHamburgerDropdown}>
              {showHamburgerDropdown ? (
                <>
                  <IoCloseOutline />
                  <div ref={hamburgerDropdownRef}>
                    <HamburgerMenu />
                  </div>
                </>
              ) : (
                <RxHamburgerMenu />
              )}
            </li>
          </section>
          <section className="navigation__links navigation__links--icons">
            <li className="navigation__profile-icon" onClick={toggleDropdown}>
              {showDropdown ? (
                <>
                  <CgProfile />
                  <div ref={profileDropdownRef}>
                    <ProfileDropdown />
                  </div>
                </>
              ) : (
                <IoPersonOutline />
              )}
            </li>
            <li onClick={toggleCart}>
              {showCart ? <IoBagHandleSharp /> : <IoBagHandleOutline />}
            </li>
          </section>
        </ul>
        {showCart && (
          <>
            <div ref={cartRef}>
              <Cart></Cart>
            </div>
          </>
        )}
      </nav>
    </>
  );
}
