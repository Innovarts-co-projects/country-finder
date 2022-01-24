import styled from 'styled-components';

const CountryCardContainer = styled.div`
  background: ${({ theme }) => theme.color.elements};
  border-radius: .8rem;

  width: 21%;

  margin-bottom: 4rem;

  box-shadow: ${({ theme }) => theme.measure.boxShadow};

  .image {
    img {
      border-top-left-radius: .8rem;
      border-top-right-radius: .8rem;

      width: 100%;
    }
  }

  .info {
    color: ${({ theme }) => theme.color.text};

    padding: 2rem;
    padding-bottom: 3rem;

    h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.3rem;
      font-weight: 300;

      margin-bottom: .4rem;

      strong {
        font-weight: 600;
      }
    }
  }

  @media (max-width: 950px) {
    width: 27%;
  }

  @media (max-width: 650px) {
    width: 46%;
  }

  @media (max-width: 450px) {
    width: 95%;
  }
`;

export { CountryCardContainer };