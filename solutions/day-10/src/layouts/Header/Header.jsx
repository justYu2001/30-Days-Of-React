import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header>
            <div className={styles.header}>
            <h1>Welcome to 30 Days Of React</h1>
            <h2>Getting Started React</h2>
            <h3>JavaScript Library</h3>
            <p>justYu2001</p>
            <small>Aug 11, 2022</small>
            </div>
        </header>
    );
};

export default Header;