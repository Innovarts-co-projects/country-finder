import styled from 'styled-components';

const CountryPageContainer = styled.main`
  .link-wrapper {
    display: flex;
    align-items: center;

    margin: 6rem 0;

    a {
      background: ${({ theme }) => theme.color.elements};
      border-radius: ${({ theme }) => theme.measure.borderRadius};
      color: ${({ theme }) => theme.color.text};

      display: flex;
      align-items: center;

      font-size: 1.5rem;

      padding: 1.2rem 1.8rem;

      box-shadow: ${({ theme }) => theme.measure.boxShadow};
    }

    img {
      width: 1.5rem;
      margin-right: 1rem;
    }

    @media (max-width: 600px) {
      margin: 5rem 0;
    }

    @media (max-width: 500px) {
      margin: 4rem 0;
    }
  }

  .country-info-wrapper {
    color: ${({ theme }) => theme.color.text};

    display: flex;

    .country-flag {
      max-width: 600px;
      flex: 1;

      img {
        width: 100%;
      }
    }
    
    .country-info {
      padding: 3rem 5vw;
    }

    .border-countries {
      max-width: 40rem;
      
      display: flex;
      align-items: center;

      flex-wrap: wrap;

      h3 {
        font-size: 1.8rem;

        margin-right: 1.6rem;
      }

      .border {
        background: ${({ theme }) => theme.color.elements};
        border-radius: ${({ theme }) => theme.measure.borderRadius};

        margin: 0 1rem 1rem 0;
        padding: .8rem;

        transition: transform .24s ease-out;

        &:hover {
          transform: scale(1.1);
        }
      }

      a {
        color: ${({ theme }) => theme.color.text};
        font-size: 1.5rem;
        font-weight: 600;
      }
    }

    header {
      font-size: 3.2rem;
      margin-bottom: 3rem;
    }

    .basic-info {
      font-size: 1.5rem;

      p {
        margin-bottom: .8rem;
      }
    }

    @media (max-width: 700px) {
      flex-direction: column;
    }
  }
`;

export { CountryPageContainer }