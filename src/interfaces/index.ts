export interface reqInterface {
  name: {
    common: string,
    nativeName: {
      spa: {
        common: string,
      }
    }
  },
  capital: string[],
  borders: string[],
  region: string,
  subregion: string,
  flags: {
    svg: string,
  },
  tld: string[],
  population: number,
  area: number,
  cca3: string,
}