import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
    return clsx(styles.link, isActive && styles.active);
};

const Navigation = () => {
    return (
        <nav className={styles.navigationContainer}>
            <ul className={styles.navigationList}>
                <li>
                    <NavLink to="/" className={buildLinkClass}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/movies" className={buildLinkClass}>
                        Movies
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;