import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '@/layouts/Header';
import Filter from '@/components/Filter';
import CatList from '@/components/CatList';
import Footer from '@/layouts/Footer';

const App = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('all');

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
      <Filter data={data} filter={filter} setFilter={setFilter} />
      <CatList data={data} filter={filter} />
      <Footer />
    </>
  );
};

export default App;