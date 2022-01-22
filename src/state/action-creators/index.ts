import { Dispatch } from 'redux';
import { reqInterface } from '../../interfaces';

export function setCountries(payload: reqInterface[]) {
  return (dispatch: Dispatch) => dispatch({
    type: 'setCountries',
    payload: payload,
  });
}