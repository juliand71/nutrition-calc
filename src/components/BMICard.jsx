import React from "react";

import Nutrition from '../Nutrition';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/styles';

function BMICard(props) {
  const useStyles = makeStyles({
    root: {
      width: '400px',
      margin: '20px',
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

  const {weightKG, heightCM} = props.pt;


  function equationString() {
    const heightM = heightCM / 100;
    return `${weightKG} kg / ${heightM}^2`;
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" className={classes.cardTitle}>BMI</Typography>
        <Typography className={classes.equation}>
          {equationString()} =
        </Typography>
        <Typography className={classes.result}>
          {Nutrition.calculateBMI(props.pt)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BMICard;