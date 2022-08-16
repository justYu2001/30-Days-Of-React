import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav>
            <ul className={styles.list}>
                <li className={styles.link}>
                    <NavLink 
                        to="/contact" 
                        className={({ isActive }) => isActive ? styles.isActiveLink : undefined}
                    >
                        Contact
                    </NavLink>
                </li>
                <li className={styles.link}>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => isActive ? styles.isActiveLink : undefined}
                    >
                        About
                    </NavLink>
                </li>
                <li className={styles.link}>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => isActive ? styles.isActiveLink : undefined}
                    >
                        Home
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;