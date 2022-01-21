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
        const countriesReq = await axios.get<reqInterface[]>('https://restcountries.com/v3.1/all');

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
    <HomePageContainer>
      <h1>Home page</h1>
      <div className="countries">
        {
          countries && countries.map((country) => {
            const countryKey = ((country.area + country.population) ^ 2) / 2;
            
            return <CountryCard country={country} key={countryKey} />
          }
          )
        }
      </div>
    </HomePageContainer>
  )
}

export default Home;