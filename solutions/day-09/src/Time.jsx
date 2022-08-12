import { useState } from 'react';

import Background from './Background';

import morningImage from './assets/images/morning.jpg';
import noonImage from './assets/images/noon.jpg';
import eveningImage from './assets/images/evening.jpg';
import nightImage from './assets/images/night.jpg';

const Time = () => {
    const [time, setTime] = useState('morning');

    const changeTime = (event) => {
        setTime(event.target.innerText.toLowerCase());
    };

    return (
        <div style={{ position: 'relative' }}>
            {time === 'morning' && <Background imageSource={morningImage} name={time} />}
            {time === 'noon' && <Background imageSource={noonImage} name={time} />}
            {time === 'evening' && <Background imageSource={eveningImage} name={time} />}
            {time === 'night' && <Background imageSource={nightImage} name={time} />}
            <div className="selectors">
                <button onClick={changeTime}>Morning</button>
                <button onClick={changeTime}>Noon</button>
                <button onClick={changeTime}>Evening</button>
                <button onClick={changeTime}>Night</button>
            </div>
        </div>
    );
};

export default Time;