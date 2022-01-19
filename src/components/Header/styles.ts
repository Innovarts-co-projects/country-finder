import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.elements};
  
  display: flex;
  justify-content: center;
  align-items: center;

  height: 8rem;

  -webkit-box-shadow: 0px -4px 15px 5px #000000; 
  box-shadow: 0px -4px 15px 5px #000000;

  .header-items-box {
    display: flex;
    justify-content: space-between;

    width: 100%;
    max-width: 1440px;

    padding: 0 5rem;
  }

  h1 {
    color: ${({ theme }) => theme.text};

    cursor: pointer;
    transition: transform .24s ease-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  button {
    background: none;
    border: 0;
    color: ${({ theme }) => theme.text};

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;
    transition: transform .24s ease-out;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export { HeaderContainer };