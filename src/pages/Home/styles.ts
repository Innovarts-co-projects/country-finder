import styled from 'styled-components';

const HomePageContainer = styled.main`
  width: 100%;
  max-width: 1440px;

  margin: 0 auto;
  padding: 0 5rem;

  .countries {
    display: flex;
    justify-content: space-between;

    flex-wrap: wrap;
  }
`;

export { HomePageContainer };