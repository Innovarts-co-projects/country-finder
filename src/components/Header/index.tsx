interface HeaderProps {
  currentTheme: string,
  changeTheme: () => void,
}

function Header({ currentTheme, changeTheme }: HeaderProps) {
  return (
    <header>
      <h1>Where in the world?</h1>
      <button type="button">
        {
          currentTheme === 'light' ? 'Dark Mode' : 'Light Mode'
        }
      </button>
    </header>
  )
}

export default Header;