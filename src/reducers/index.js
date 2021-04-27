import currentPatient from "./currentPatient";
import currentConditions from './currentConditions'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  currentPatient,
  currentConditions,
});

export default rootReducer;