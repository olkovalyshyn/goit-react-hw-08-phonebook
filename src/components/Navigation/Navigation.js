import { NavLink } from "react-router-dom";
import styles from "./Navigations.module.css";

export default function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Головна
      </NavLink>

      <NavLink
        to="/contacts"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Контакти
      </NavLink>
    </nav>
  );
}
