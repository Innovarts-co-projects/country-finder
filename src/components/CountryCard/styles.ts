import styled from 'styled-components';

const CountryCardContainer = styled.div`
  background: ${({ theme }) => theme.background};
  border-radius: .8rem;

  width: 21%;

  margin-bottom: 4rem;

  box-shadow: 3px 2px 8px 2px rgba(0,0,0,0.53);

  .image {
    img {
      border-radius: .8rem;

      width: 100%;
    }
  }

  .info {
    color: ${({ theme }) => theme.text};

    padding: 1.2rem;
    padding-bottom: 5rem;

    h2 {
      font-size: 1.8rem;
      margin-bottom: .8rem;
    }

    p {
      font-size: 1.3rem;
    }
  }
`;

export { CountryCardContainer };