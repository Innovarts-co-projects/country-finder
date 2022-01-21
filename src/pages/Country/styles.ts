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
  }
`;

export { CountryPageContainer }