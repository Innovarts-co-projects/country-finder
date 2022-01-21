import { Link } from 'react-router-dom';
import { reqInterface } from '../../pages/Home/reqTypes';
import { CountryCardContainer } from './styles';

interface CountryCardProps {
  country: reqInterface,
}

function CountryCard({ country: { name, flags, population, region, capital } }: CountryCardProps) {

  console.log(name.common);

  return (
    <CountryCardContainer className="scale-animate">
      <Link to={`country/${name.common.toLowerCase()}`}>
        <div className="image">
          <img src={flags.svg} alt={`${name.common} flag`} />
        </div>
        <div className="info">
          <h2>{name.common}</h2>
          <p><strong>Population:</strong> {population}</p>
          <p><strong>Region:</strong> {region}</p>
          { capital && <p><strong>Capital:</strong> {capital[0]}</p> }
        </div>
      </Link>
    </CountryCardContainer>
  )
}

export default CountryCard;