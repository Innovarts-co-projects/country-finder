import { combineReducers } from 'redux';
import CountriesReducer from './reducers/CountriesReducer';

export const rootReducer = combineReducers({
  countries: CountriesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;