import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={`${styles.wrapper}`}>
          <div className={styles.logoWrapper}>
            <Link to="/">
              <img src="/logo.svg" alt="Idearoom Logo" className={styles.logo} />
            </Link>
          </div>
          <nav className={styles.navigation}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <NavLink
                  className={({ isActive }) => isActive ? `${styles.link} ${styles.linkActive}` : styles.link}
                  to="/courses">
                  კურსები
                </NavLink>
              </li>
              <li className={styles.navigationItem}>
                <NavLink
                  className={({ isActive }) => isActive ? `${styles.link} ${styles.linkActive}` : styles.link}
                  to="/offers">
                  შეთავაზება
                </NavLink>
              </li>
              <li className={styles.navigationItem}>
                <NavLink
                  className={({ isActive }) => isActive ? `${styles.link} ${styles.linkActive}` : styles.link}
                  to="/blogs">
                  ბლოგი
                </NavLink>
              </li>
              <li className={styles.navigationItem}>
                <NavLink
                  className={({ isActive }) => isActive ? `${styles.link} ${styles.linkActive}` : styles.link}
                  to="/about-us">
                  ჩვენ შესახებ
                </NavLink>
              </li>
              <li className={styles.navigationItem}>
                <NavLink
                  className={({ isActive }) => isActive ? `${styles.link} ${styles.linkActive}` : styles.link}
                  to="/contact">
                  კონტაქტი
                </NavLink>
              </li>
              <li className={styles.navigationItem}>
                <NavLink
                  className={`${styles.link} btnCta btnPrimary`}
                  to="/register">
                  რეგისტრაცია
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}