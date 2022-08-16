import styles from './About.module.css';
import avatar from '@/assets/images/avatar.jpeg';

const About = () => {
    const skills = ['HTML', 'CSS', 'JS', 'Vue', 'Git', 'Python'];

    return (
        <main className={styles.about}>
            <img src={avatar} alt='avatar' className={styles.avatar} />
            <h2 className={styles.name}>justYu2001</h2>
            <p style={{ color: '#aaa' }}>FrontEnd Developer, Taiwan</p>
            <h2 style={{ marginTop: '20px', fontSize: '20px' }}>SKILLS</h2>
            <ul style={{ padding: 0 }}>
            {skills.map(skill => <li key={skill} className={styles.skills}>{skill}</li>)}
            </ul>
        </main>
    );
};

export default About;