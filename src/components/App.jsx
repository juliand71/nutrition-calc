import React from 'react';

import {convertUnits} from '../Nutrition';

import PatientForm from './PatientForm'
import NutritionTable from './NutritionTable';
import MifflinCard from './MifflinCard';
import HarrisBenedictCard from './HarrisBenedictCard';
import BMICard from './BMICard';
import IDWCard from './IDWCard';
import KCalCard from './KCalCard';


import {makeStyles} from '@material-ui/styles';



function App() {
  const useStyles = makeStyles({
    root: {
      display: 'flex',
    }
  })

  const classes = useStyles();

  const [patient, setPatient] = React.useState({
    gender: 'female',
    age: 18,
    weightKG: 45.35,
    weightLB: 100,
    heightCM: 152.4,
    heightIN: 60,
    pal: 1.7,
  });

  function updatePatient(prop, value) {
    
    const {convertedUnit, convertedValue} = convertUnits(prop, parseFloat(value));

    // debugging conversion
    //console.log(`Converted ${value} ${prop} to ${convertedValue} ${convertedUnit}`);

    setPatient(prevPatient => {
      if (convertedUnit !== undefined) {
        return {
          ...prevPatient,
          [prop]: value,
          [convertedUnit]: parseFloat(convertedValue)
        };
      } else {
        return {
          ...prevPatient,
          [prop]: value
        };
      } 
    });
  }

  return (
    <div className={classes.root}>
      <PatientForm pt={patient} onUpdate={updatePatient} />
      <div>
        <MifflinCard pt={patient} />
        <HarrisBenedictCard pt={patient} />
        <BMICard pt={patient} />
        <IDWCard pt={patient} />
        <KCalCard pt={patient} />
      </div>
      <div>
        <NutritionTable pt={patient} />
      </div>
      
    </div>
  );
}

export default App;
