import { useState, useEffect } from 'react';

import Header from '@/layouts/Header';
import UserInformation from '@/components/UserInformation';
import Footer from '@/layouts/Footer';

const App = () => {
  const [mode, setMode] = useState('light');

  const switchMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    const root = document.documentElement;

    const variables = [
      '--header-background-color',
      '--app-background-color',
      '--footer-background-color',
      '--border-color',
      '--color',
    ];

    const lightStyles = {
      '--header-background-color': '#61dbfb',
      '--app-background-color': '#fff',
      '--footer-background-color': '#6cf',
      '--border-color': 'transparent',
      '--color': '#000',
    };

    const darkStyles = {
      '--header-background-color': '#101729',
      '--app-background-color': '#101729',
      '--footer-background-color': '#101729',
      '--border-color': '#fff',
      '--color': '#fff',
    };

    variables.forEach((variable) => {
      if (mode === 'light') {
        root.style.setProperty(variable, lightStyles[variable]);
      } else {
        root.style.setProperty(variable, darkStyles[variable]);
      }
    });

  }, [mode]);

  return (
    <>
      <Header />
      <UserInformation switchMode={switchMode} />
      <Footer />
    </>
  );
};

export default App;