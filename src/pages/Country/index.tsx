import { useParams } from 'react-router-dom';

function Country() {
  const params = useParams();

  return (
    <h1>Country Page: {params.countryId}</h1>
  )
}

export default Country