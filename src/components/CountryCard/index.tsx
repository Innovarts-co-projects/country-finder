import { Link } from 'react-router-dom';
import { reqInterface } from '../../pages/Home/reqTypes';
import { CountryCardContainer } from './styles';

interface CountryCardProps {
  country: reqInterface,
}

function CountryCard({ country }: CountryCardProps) {
  return (
    <CountryCardContainer>
      <Link to={`country/${country.name}`}>
        <div className="image">
          <img src={country.flag} alt={`${country.name} flag`} />
        </div>
        <div className="info">
          <h2>{country.name}</h2>
          <p>Population: {country.population}</p>
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital}</p>
        </div>
      </Link>
    </CountryCardContainer>
  )
}

export default CountryCard;