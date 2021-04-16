import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink exact to="/" activeClassName={styles.activeLink}>
              Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/movies" activeClassName={styles.activeLink}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
