import { useEffect, useState } from 'react';
import axios from 'axios';

import { reqInterface } from './reqTypes';

function Home() {
  const [countries, setCountries] = useState<reqInterface[] | null>(null);

  useEffect(() => {
    (async() => {
      try {
        const countriesReq = await axios.get<reqInterface[]>('https://restcountries.com/v2/all');

        setCountries(countriesReq.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  useEffect(() => {
    console.log(countries);
  }, [countries]);

  return (
    <h1>Home page</h1>
  )
}

export default Home;