import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {

    return (
         <nav className={css.navigation}>
      <NavLink className={getNavLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={getNavLinkClass} to="/catalog">
          Catalog
      </NavLink>
        </nav>

    )
}