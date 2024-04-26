import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Add a Build
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/builds"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Saved Builds
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
