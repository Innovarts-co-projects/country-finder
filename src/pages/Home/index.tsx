import { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';

import { HomePageProps } from '../interfaces';

import { HomePageContainer } from './styles';
import CountryCard from '../../components/CountryCard';

import blackSearchIcon from '../../assets/images/icons/black-search-icon.png';
import whiteSearchIcon from '../../assets/images/icons/white-search-icon.png';
import { reqInterface } from '../../interfaces';

function Home({ currentTheme }: HomePageProps) {
  const [countries, setCountries] = useState<reqInterface[] | null>(() => {
    let item = localStorage.getItem('countries');

    if(item) {
      return JSON.parse(item);
    }

    return null;
  });

  const [inputValue, setInputValue] = useState<string>('');
  const [selectValue, setSelectValue] = useState<string>('initial');

  useEffect(() => {
    if(countries !== null) return;
    
    (async() => {
      try {
        const countriesReq = await axios.get<reqInterface[]>('https://restcountries.com/v3.1/all');

        setCountries(countriesReq.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [countries]);

  useEffect(() => {
    if(countries === null) return;

    localStorage.setItem('countries', JSON.stringify(countries));
  }, [countries]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  }

  return (
    <HomePageContainer className="page">
      <div className="search">
        <div className="input-field-wrapper input-pattern">
          <img src={currentTheme === 'light' ? blackSearchIcon : whiteSearchIcon} alt="Search Icon" />
          <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Search for a country..." />
        </div>
        <select className="input-pattern" value={selectValue} onChange={handleSelectChange}>
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