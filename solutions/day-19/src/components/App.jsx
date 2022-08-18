import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '@/layouts/Header';
import CatList from '@/components/CatList';
import Footer from '@/layouts/Footer';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
      const initializeData = async () => {
          const URL = 'https://api.thecatapi.com/v1/breeds';
          const response = await axios.get(URL);
          setData(response.data);
      }

      initializeData();
  }, []);

  return (
    <>
      <Header data={data} />
      <CatList data={data} />
      <Footer />
    </>
  );
};

export default App;