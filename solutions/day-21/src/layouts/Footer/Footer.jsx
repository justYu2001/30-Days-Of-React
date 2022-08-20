import { useTheme } from '@/hook/theme';
import styles from './Footer.module.css';

const Footer = () => {
    const theme = useTheme();

    const style = {
        backgroundColor: theme === 'light' ? '#61dbfb' : '#101729',
        color: theme === 'light' ? '#000' : '#fff',
        borderTop: theme === 'light' ? '1px solid #61dbfb' : '1px solid #fff',
    };

    return (
        <footer style={style}>
            <div className={styles.footer}>
                <p>Copyright 2022</p>
            </div>
        </footer>
    );
};

export default Footer;