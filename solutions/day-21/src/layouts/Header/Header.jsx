import { useTheme } from '@/hook/theme'
import styles from './Header.module.css';

const Header = () => {
    const theme = useTheme();

    const style = {
        backgroundColor: theme === 'light' ? '#61dbfb' : '#101729',
        color: theme === 'light' ? '#000' : '#fff',
        borderBottom: theme === 'light' ? '1px solid #61dbfb' : '1px solid #fff',
    };

    return (
        <header style={style}>
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