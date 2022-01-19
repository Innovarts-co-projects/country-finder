import { HeaderContainer } from './styles';

interface HeaderProps {
  currentTheme: string,
  changeTheme: () => void,
}

function Header({ currentTheme, changeTheme }: HeaderProps) {
  return (
    <HeaderContainer>
      <div className="header-items-box">
        <h1>Where in the world?</h1>
        <button type="button" onClick={changeTheme}>
          {
            currentTheme === 'light' ? 'Dark Mode' : 'Light Mode'
          }
        </button>
      </div>
    </HeaderContainer>
  )
}

export default Header;