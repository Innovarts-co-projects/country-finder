import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { CountryPageContainer } from './styles';

import blackShapedArrow from '../../assets/images/icons/black-shaped-arrow.png';
import whiteShapedArrow from '../../assets/images/icons/white-shaped-arrow.png';
import { CountryPageProps } from '../interfaces';
import CountryInfo from './CountryInfo';
import useAxios from '../../hooks/useAxios';

function Country({currentTheme}: CountryPageProps) {
  const params = useParams();

  const [countryResponse, countryLoading] = useAxios(`https://restcountries.com/v3.1/alpha/${params.countryId}`);

  const countryInfoHelper = [
    {
      name: 'Native Name',
      value: countryResponse?.[0].name?.nativeName?.spa?.common || countryResponse?.[0].name?.common,
    }, {
      name: 'Population',
      value: countryResponse?.[0].population,
    }, {
      name: 'Region',
      value: countryResponse?.[0].region,
    }, {
      name: 'Sub Region',
      value: countryResponse?.[0].subregion,
    }, {
      name: 'Capital',
      value: countryResponse?.[0].capital?.[0],
    }, {
      name: 'Top Level Domain',
      value: countryResponse?.[0].tld?.[0],
    }
  ]

  return (
    <CountryPageContainer className="page">
      <div className="link-wrapper">
        <Link to="/" className="scale-animate">
          <img src={currentTheme === 'light' ? blackShapedArrow : whiteShapedArrow} alt="Arrow" />
          <span>Back</span>
        </Link>
      </div>
      {
        countryResponse && (
          <div className="country-info-wrapper">
            <div className="country-flag">
              <img src={countryResponse[0].flags.svg} alt="Country Flag" />
            </div>
            <div className="country-info">
              <header>
                <h2>{countryResponse[0].name.common}</h2>
              </header>
              <div className="basic-info">
                {
                  countryInfoHelper.map(({name, value}) => 
                    <CountryInfo name={name} value={value} key={name} />
                  )
                }
              </div>
            </div>
          </div>
        )
      }
    </CountryPageContainer>
  )
}

export default Country