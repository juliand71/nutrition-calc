import React from "react";

import Nutrition from '../Nutrition';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/styles';

import { useSelector } from 'react-redux';

function BMICard(props) {
  const useStyles = makeStyles({
    root: {
      width: props.drawerWidth - 20,
      margin: '10px',
      display: 'flex',
    },
    cardTitle: {
      fontWeight: 'bold',
    },
    equation: {
      fontStyle: 'italic',
    },
    result: {
      fontWeight: 'bold'
    },
  });

  const classes = useStyles();

  const currentPatient = useSelector(state => state.currentPatient);
  const {weightKG, heightCM} = currentPatient;
  const {gender} = currentPatient;

  function BMIequationString() {
    const heightM = heightCM / 100;
    return `${weightKG} kg / ${heightM}^2`;
  }

  
  function IBWequationString() {
    if (gender === 'female') {
      return `100 lbs for 5 feet + 5 lbs per inch`;
    } else if (gender ==='male') {
      return `106 lbs for 5 feet + 6 lbs per inch`;
    }
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" className={classes.cardTitle}>BMI</Typography>
        <Typography className={classes.equation}>
          {BMIequationString()} =
        </Typography>
        <Typography className={classes.result}>
          {Nutrition.calculateBMI(currentPatient)}
        </Typography>
        <Typography variant="h6" className={classes.cardTitle}>IBW</Typography>
        <Typography className={classes.equation}>
          {IBWequationString()} =
        </Typography>
        <Typography className={classes.result}>
          {Nutrition.calculateIDW(currentPatient)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BMICard;