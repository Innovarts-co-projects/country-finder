import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.color.elements};
  
  display: flex;
  justify-content: center;
  align-items: center;

  height: 8rem;

  -webkit-box-shadow: ${({ theme }) => theme.measure.boxShadow}; 
  box-shadow: ${({ theme }) => theme.measure.boxShadow}; 

  .header-items-box {
    display: flex;
    justify-content: space-between;

    width: 100%;
    max-width: 1440px;

    padding: 0 5rem;
  }

  h1 {
    color: ${({ theme }) => theme.color.text};

    cursor: pointer;
    transition: transform .24s ease-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  button {
    background: none;
    border: 0;
    color: ${({ theme }) => theme.color.text};

    display: flex;
    align-items: center;

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;
    transition: transform .24s ease-out;

    img {
      width: 2rem;
      
      margin-right: 1rem;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export { HeaderContainer };