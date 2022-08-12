import { useState } from "react";

import Background from "./Background";

import springImage from './assets/images/spring.jpg';
import summerImage from './assets/images/summer.jpg';
import autumnImage from './assets/images/autumn.jpg';
import winterImage from './assets/images/winter.jpg';

const Season = () => {
  const [season, setSeason] = useState('spring');

  const changeSeason = (event) => {
    setSeason(event.target.innerText.toLowerCase());
  }

  return (
    <div style={{ position: 'relative' }}>
      {season === 'spring' && <Background imageSource={springImage} name={season} />}
      {season === 'summer' && <Background imageSource={summerImage} name={season} />}
      {season === 'autumn' && <Background imageSource={autumnImage} name={season} />}
      {season === 'winter' && <Background imageSource={winterImage} name={season} />}
      <div className="selectors">
        <button onClick={changeSeason}>Spring</button>
        <button onClick={changeSeason}>Summer</button>
        <button onClick={changeSeason}>Autumn</button>
        <button onClick={changeSeason}>Winter</button>
      </div>
    </div>
  );
};

export default Season;