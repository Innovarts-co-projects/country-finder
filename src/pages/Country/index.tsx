import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { CountryPageContainer } from './styles';

import blackShapedArrow from '../../assets/images/icons/black-shaped-arrow.png';
import whiteShapedArrow from '../../assets/images/icons/white-shaped-arrow.png';
import { CountryPageProps } from '../interfaces';
import axios from 'axios';
import { countryReqInterface } from './reqTypes';

function Country({currentTheme}: CountryPageProps) {
  const params = useParams();

  const [country, setCountry] = useState<countryReqInterface | null>(null);

  useEffect(() => {
    (async() => {
      try {
        const countryReq = 
        await axios.get(`https://restcountries.com/v3.1/name/${params.countryId}`);

        setCountry(countryReq.data[0]);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [params.countryId]);

  useEffect(() => {
    console.log(country);
  }, [country]);

  return (
    <CountryPageContainer className="page">
      <div className="link-wrapper">
        <Link to="/" className="scale-animate">
          <img src={currentTheme === 'light' ? blackShapedArrow : whiteShapedArrow} alt="Arrow" />
          <span>Back</span>
        </Link>
      </div>
      {
        country && (
          <div className="country-info-wrapper">
            <div className="country-flag">
              <img src={country.flags.svg} alt="Country Flag" />
            </div>
            <div className="country-info">

            </div>
          </div>
        )
      }
    </CountryPageContainer>
  )
}

export default Country