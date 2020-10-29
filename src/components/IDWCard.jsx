import React from "react";

import Nutrition from '../Nutrition';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/styles';

function IDWCard(props) {
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

  const {gender} = props.pt;

  function equationString() {
    if (gender === 'female') {
      return `100 lbs for 5 feet + 5 pounds per additional inch`;
    } else if (gender ==='male') {
      return `106 lbs for 5 feet + 6 pounds per additional inch`;
    }
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" className={classes.cardTitle}>IBW</Typography>
        <Typography className={classes.equation}>
          {equationString()} =
        </Typography>
        <Typography className={classes.result}>
          {Nutrition.calculateIDW(props.pt)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default IDWCard;