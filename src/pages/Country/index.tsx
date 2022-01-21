import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { CountryPageContainer } from './styles';

import blackShapedArrow from '../../assets/images/icons/black-shaped-arrow.png';
import whiteShapedArrow from '../../assets/images/icons/white-shaped-arrow.png';
import { CountryPageProps } from '../interfaces';

function Country({currentTheme}: CountryPageProps) {
  const params = useParams();

  console.log(params);

  return (
    <CountryPageContainer className="page">
      <div className="link-wrapper">
        <Link to="/">
          <img src={currentTheme === 'light' ? blackShapedArrow : whiteShapedArrow} alt="Arrow" />
          <span>Back</span>
        </Link>
      </div>
      <div className="country-info">

      </div>
    </CountryPageContainer>
  )
}

export default Country