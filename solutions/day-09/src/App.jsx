import { useState, useEffect } from "react";

import './App.css';
import Season from './Season';
import Time from './Time';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  } , []);

  return (
    <div id="app">
      {isLoading ? (
        <div className="loading">
          Loading 
        </div>
      ) : (
        <>
          <Season />
          <Time />
        </>
      )}
    </div>
  );
};

export default App;