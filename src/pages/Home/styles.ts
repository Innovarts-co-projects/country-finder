import styled from 'styled-components';

const HomePageContainer = styled.main`
  .search {
    display: flex;
    justify-content: space-between;

    margin: 5rem 0;

    .input-pattern {
      background-color: ${({ theme }) => theme.color.elements};
      border: 0;
      border-radius: ${({ theme }) => theme.measure.borderRadius};
      color: ${({ theme }) => theme.color.text};

      padding: 2rem;

      box-shadow: ${({ theme }) => theme.measure.boxShadow};
    }

    .input-field-wrapper {
      max-width: 50rem;

      display: flex;
      align-items: center;

      @media (max-width: 500px) {
        margin-bottom: 2rem;
      }
    }

    select.input-pattern {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;

      background-image: url(${({ theme }) => theme.image.themedSelectArrow});
      background-repeat: no-repeat;
      background-position: 90% center;
      background-size: 11px;

      width: 100%;
      max-width: 20rem;

      padding-right: 5rem;
    }

    input {
      flex: 1;

      background: none;
      border: 0;
      color: ${({ theme }) => theme.color.text};

      padding: .4rem;

      &::placeholder {
        color: ${({ theme }) => theme.color.text};
      }
    }

    img {
      width: 15px;

      margin-right: 2rem;
    }

    @media (max-width: 500px) {
    flex-direction: column;
  }
  }

  .countries {
    display: flex;
    justify-content: space-between;

    flex-wrap: wrap;

    @media (max-width: 450px) {
      justify-content: center;
    }
  }
`;

export { HomePageContainer };