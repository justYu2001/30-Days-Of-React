import { useTheme, useThemeUpdater } from '@/hook/theme';
import styles from './UserInformation.module.css';
import avatar from '@/assets/images/avatar.jpeg';

const UserCard = () => (
    <div className={styles.userCard}>
        <img src={avatar} alt='user image' className={styles.avatar} />
        <h2>justYu2001</h2>
    </div>
);
  
  const TechList = () => {
    const techs = ['HTML', 'CSS', 'JavaScript']
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
};

const UserInformation = () => {
    const theme = useTheme();
    const toggleTheme = useThemeUpdater();

    const style = {
        backgroundColor: theme === 'light' ? '#fff' : '#101729',
        color: theme === 'light' ? '#000' : '#fff',
    };

    return (
        <main style={style}>
            <div className={styles.main}>
                <p>Prerequisite to get started react.js:</p>
                <ul>
                    <TechList />
                </ul>
                <UserCard />
                <button className={styles.button} onClick={toggleTheme}>Changing Background</button>
            </div>
        </main>
    );
};

export default UserInformation;