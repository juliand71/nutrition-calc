import currentPatient from "./currentPatient";
import currentConditions from './currentConditions';
import currentAmputations from './currentAmputations';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  currentPatient,
  currentConditions,
  currentAmputations,
});

export default rootReducer;