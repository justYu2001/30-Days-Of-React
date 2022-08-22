import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '@/layouts/Header';
import CountryList from '@/components/CountryList';
import SearchBar from '@/components/SearchBar';
import Chart from '@/components/Chart';
import Footer from '@/layouts/Footer';

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
          const URL = 'https://restcountries.com/v3.1/all';
          const result = await axios(URL);
          setData(result.data);
      }

      fetchData();
    } , []);

    const [keyword, setKeyword] = useState('');
  
  return (
    <>
      <Header numberOfCountry={data.length} />
      <SearchBar setKeyword={setKeyword} />
      <CountryList data={data} keyword={keyword} />
      <Chart data={data} />
      <Footer />
    </>
  );
};

export default App;