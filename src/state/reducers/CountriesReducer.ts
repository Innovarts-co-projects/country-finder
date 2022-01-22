import { reqInterface } from '../../interfaces';
import { Action } from '../actions';
import { ActionTypes } from '../action-types';

interface StateInterface {
  countriesList: reqInterface[],
}

const initialState = {
  countriesList: [],
}

function CountriesReducer(state: StateInterface = initialState, action: Action) {
  switch(action.type) {
    case ActionTypes.SET_COUNTRIES:
      return {
        ...state,
        countriesList: action.payload,
      }
    default: 
      return state;
  }
}

export default CountriesReducer;