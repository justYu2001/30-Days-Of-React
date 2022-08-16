import styles from './Contact.module.css';
import { MdEmail } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs';

const Contact = () => {
    return (
        <main className={styles.contact}>
            <div className={styles.card}>
                <div className={styles.circle}>
                    <MdEmail size='2em' />
                </div>
                <h2>Email</h2>
                <a href="mailto:jack4781012@gmail.com" className={styles.link}>jack4781012@gmail.com</a>
            </div>
            <div className={styles.card}>
                <div className={styles.circle}>
                    <BsGithub size='2em' />
                </div>
                <h2>Github</h2>
                <a href="https://github.com/justYu2001" className={styles.link}>justYu2001</a>
            </div>
        </main>
    );
};

export default Contact;