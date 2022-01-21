export interface CountryInfoProps {
  name: string,
  value: string | number | undefined,
}

function CountryInfo({ name, value }: CountryInfoProps) {
  if(!value) return null;

  return (
    <p><strong>{name}:</strong> {value}</p>
  )
}

export default CountryInfo