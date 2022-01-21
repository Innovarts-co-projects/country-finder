import { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';

import { reqInterface } from './reqTypes';
import { HomePageContainer } from './styles';
import CountryCard from '../../components/CountryCard';

function Home() {
  const [countries, setCountries] = useState<reqInterface[] | null>(null);

  const [inputValue, setInputValue] = useState<string>('');
  const [selectValue, setSelectValue] = useState<string>('');

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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  }

  return (
    <HomePageContainer>
      <h1>Home page</h1>
      <div className="search">
        <div className="input_field_wrapper">
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </div>
        <select value={selectValue} onChange={handleSelectChange}>
          <option value="initial" disabled>Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
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