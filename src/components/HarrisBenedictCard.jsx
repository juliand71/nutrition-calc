import React from 'react';

import Nutrition from '../Nutrition';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

function HarrisBenedictCard(props) {
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

  const {age, weightKG, heightCM, gender, pal} = props.pt;

  function equationString() {
    if (gender === "male") {
      return `66.47 + 13.75 * ${weightKG}kg + 5 * ${heightCM}cm - 6.75 * ${age}`;
    } else {
      return `655.1 + 9.56 * ${weightKG}kg + 1.85 * ${heightCM}cm - 4.68 * ${age}`;
    }
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" className={classes.cardTitle}>Harris Benedict</Typography>
        <Typography className={classes.equation}>
          {equationString()} =
        </Typography>
        <Typography className={classes.result}>
          {Nutrition.calculateHB(props.pt)}
        </Typography>
        <Typography>
          x PAL = 
        </Typography>
        <Typography className={classes.result}>
          {(Nutrition.calculateHB(props.pt) * pal)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HarrisBenedictCard;