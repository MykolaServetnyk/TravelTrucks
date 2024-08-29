import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {

    return (
         <nav className={css.navigation}>
      <NavLink className={css.homeLink} to="/">
        <span className={css.sp}>Home</span> 
      </NavLink>
      <NavLink className={css.catalogLink} to="/catalog">
        <span className={css.sp}>Catalog</span>
      </NavLink>
        </nav>

    )
}