interface CountryInfoProps {
  name: string,
  value: string | string[] | number | undefined,
}

function CountryInfo({ name, value }: CountryInfoProps) {
  return (
    <p><strong>{name}:</strong> {value}</p>
  )
}

export default CountryInfo