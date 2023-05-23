import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

import styles from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? styles.activeNavLink
                  : styles.navLink
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={styles.navListItem}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? styles.activeNavLink
                  : styles.navLink
              }
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
