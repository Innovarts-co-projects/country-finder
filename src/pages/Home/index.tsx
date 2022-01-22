import { ChangeEvent, useEffect, useState } from 'react';

import { HomePageProps } from '../interfaces';

import { HomePageContainer } from './styles';
import CountryCard from '../../components/CountryCard';

import blackSearchIcon from '../../assets/images/icons/black-search-icon.png';
import whiteSearchIcon from '../../assets/images/icons/white-search-icon.png';
import { reqInterface } from '../../interfaces';
import axios from 'axios';

const STORAGE_KEY = 'countries';

function Home({ currentTheme }: HomePageProps) {
  const [countries, setCountries] = useState<reqInterface[] | null>(null);

  const [inputValue, setInputValue] = useState<string>('');
  const [selectValue, setSelectValue] = useState<string>('');

  useEffect(() => {
    let item = localStorage.getItem(STORAGE_KEY);

    if(item) {
      setCountries(JSON.parse(item));
      return;
    }

    (async() => {
      try {
        const res = await axios.get('https://restcountries.com/v3.1/all');
        const data = await res.data;

        setCountries(data);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
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
    <HomePageContainer className="page">
      <div className="search">
        <div className="input-field-wrapper input-pattern">
          <img src={currentTheme === 'light' ? blackSearchIcon : whiteSearchIcon} alt="Search Icon" />
          <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Search for a country..." />
        </div>
        <select className="input-pattern" value={selectValue} onChange={handleSelectChange}>
          <option value="" disabled>Filter by Region</option>
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="countries">
        {
          countries && countries.map((country) => {
            const countryKey = ((country.area + country.population) ^ 2) / 2;
            
            return <CountryCard country={country} key={countryKey} textSearchCondition={inputValue.toLowerCase()} regionSearchCondition={selectValue} />
          }
          )
        }
      </div>
    </HomePageContainer>
  )
}

export default Home;