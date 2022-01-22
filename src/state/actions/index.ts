import { reqInterface } from '../../interfaces';

interface SetCountriesInterface {
  type: 'setCountries',
  payload: reqInterface[],
}

export type Action = SetCountriesInterface;