import { Link } from 'react-router-dom';

import { HeaderContainer } from './styles';

import sun from '../../assets/images/icons/sun.png';
import moon from '../../assets/images/icons/moon.png';

interface HeaderProps {
  currentTheme: string,
  changeTheme: () => void,
}

function Header({ currentTheme, changeTheme }: HeaderProps) {
  return (
    <HeaderContainer>
      <div className="header-items-box">
        <Link to="/"><h1>Where in the world?</h1></Link>
        <button type="button" onClick={changeTheme}>
          {
            currentTheme === 'light' ? (
              <>
                <img src={moon} alt="Dark Mode Icon" />
                <span>Dark Mode</span>
              </>
            ) : (
              <>
                <img src={sun} alt="Light Mode Icon" />
                <span>Light Mode</span>
              </>
            )
          }
        </button>
      </div>
    </HeaderContainer>
  )
}

export default Header;