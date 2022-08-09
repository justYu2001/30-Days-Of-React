import './App.css'

import NumberGenerator from './NumberGenerator';
import HexColors from './HexColors';
import WorldPopulation from './WorldPopulation';

const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'USA', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russia', population: 146599183 },
  { country: 'Japan', population: 126960000 },
];

const App = () => (
  <div id="app">
    <h1>30 Days of React</h1>
    <NumberGenerator n={31} />
    <HexColors n={32} />
    <WorldPopulation data={tenHighestPopulation} />
  </div>
);

export default App
