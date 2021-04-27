import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../actions'

import {convertUnits} from '../Nutrition';

import PatientForm from './PatientForm'
import MifflinCard from './MifflinCard';
import HarrisBenedictCard from './HarrisBenedictCard';
import KCalCard from './KCalCard';
import TitleBar from './TitleBar';
import ConditionSelect from './ConditionSelect';


import {makeStyles} from '@material-ui/styles';
import NutritionTable from './NutritionTable';
import BMICard from './BMICard';



function App() {
  const useStyles = makeStyles({
    root: {
      display: 'flex',
    },
    cardSection: {
      marginTop: '50px',
    },
    tableSection: {
      marginTop: '50px',
    },
  })

  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <div className={classes.titleBar}>
        <TitleBar />
      </div>
      <PatientForm />
      <div className={classes.cardSection}>
        <BMICard />
        <MifflinCard />
        <HarrisBenedictCard />
        <KCalCard />
      </div>
      <div className={classes.tableSection}>
      <NutritionTable />
      </div>
      
    </div>
  );
}

export default App;
