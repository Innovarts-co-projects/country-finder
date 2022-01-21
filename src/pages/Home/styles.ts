import styled from 'styled-components';

const HomePageContainer = styled.main`
  width: 100%;
  max-width: 1440px;

  margin: 0 auto;
  padding: 0 5rem;

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

    select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;

      background-image: url(${({ theme }) => theme.image.themedSelectArrow});
      background-repeat: no-repeat;
      background-position: 90% center;
      background-size: 11px;
    }

    img {
      width: 15px;

      margin-right: 2rem;
    }
  }

  .countries {
    display: flex;
    justify-content: space-between;

    flex-wrap: wrap;
  }
`;

export { HomePageContainer };