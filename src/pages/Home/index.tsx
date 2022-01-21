import { useEffect, useState } from 'react';
import axios from 'axios';

import { reqInterface } from './reqTypes';
import { HomePageContainer } from './styles';
import CountryCard from '../../components/CountryCard';

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

  return (
    <HomePageContainer>
      <h1>Home page</h1>
      <div className="countries">
        {
          countries && countries.map((country) => 
            <CountryCard country={country} key={`${country.alpha2Code}${country.alpha3Code}`} />
          )
        }
      </div>
    </HomePageContainer>
  )
}

export default Home;