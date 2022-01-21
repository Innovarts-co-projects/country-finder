export interface reqInterface {
  name: string,
  capital: string,
  region: string,
  subregion: string,
  flag: string,
  population: number,
  languages: {
    name: string,
  }[]
  currencies: {
    name: string,
  }[],
  borders: string[],
  topLevelDomain: string[],
}