import React from 'react';

import Nutrition from '../Nutrition';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/styles';

function MifflinCard(props) {
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
      return `10 * ${weightKG}kg + 6.25 * ${heightCM}cm - 5 * ${age} + 5`;
    } else {
      return `10 * ${weightKG}kg + 6.25 * ${heightCM}cm - 5 * ${age} -161`;
    }
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" className={classes.cardTitle}>Mifflin</Typography>
        <Typography className={classes.equation}>
          {equationString()} =
        </Typography>
        <Typography className={classes.result}>
          {Nutrition.calculateMifflin(props.pt)}
        </Typography>
        <Typography>
          x PAL = 
        </Typography>
        <Typography className={classes.result}>
          {(Nutrition.calculateMifflin(props.pt) * pal)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MifflinCard;