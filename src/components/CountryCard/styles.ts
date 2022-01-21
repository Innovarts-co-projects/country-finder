import styled from 'styled-components';

const CountryCardContainer = styled.div`
  background: ${({ theme }) => theme.elements};
  border-radius: .8rem;

  width: 21%;

  margin-bottom: 4rem;

  box-shadow: 3px 2px 8px 2px rgba(0,0,0,0.53);
  transition: transform .24s ease-out;

  .image {
    img {
      border-top-left-radius: .8rem;
      border-top-right-radius: .8rem;

      width: 100%;
    }
  }

  .info {
    color: ${({ theme }) => theme.text};

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

  &:hover {
    transform: scale(1.05);
  }
`;

export { CountryCardContainer };