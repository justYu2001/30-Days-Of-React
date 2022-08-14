import { useState } from 'react';
import styles from './App.module.css';

const App = () => {
    const [blockStyles, setBlockStyles] = useState({
        position: 'relative',
    });

    const handleMouseEnter = (event) => {
        const app = event.target.parentElement;
        const height = app.clientHeight - event.target.clientHeight;
        const width = app.clientWidth - event.target.clientWidth;

        const { floor, random } = Math;

        const randomX = `${floor(random() * width)}px`;
        const randomY = `${floor(random() * height)}px`;

        setBlockStyles({
            position: 'absolute',
            top: randomY,
            left: randomX,
        });
    };

    return (
        <div className={styles.app}>
            <div className={styles.block} style={blockStyles} onMouseEnter={handleMouseEnter}>
                    30 Days Of React
            </div>
        </div>
    );
};

export default App;