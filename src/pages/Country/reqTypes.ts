export interface countryReqInterface {
  name: {
    common: string,
    nativeName: {
      spa: {
        common: string,
      }
    }
  },
  capital: string[],
  region: string,
  subregion: string,
  flags: {
    svg: string,
  },
  tld: string[],
  population: number,
  area: number,
}