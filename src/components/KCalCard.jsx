import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';



function KCalCard(props) {
  const useStyles = makeStyles({
    root: {
      width: '400px',
      margin: '20px',
      display: 'flex',
    },
    cardTitle: {
      fontWeight: 'bold',
      marginBottom: '50px'
    },
    slider: {
      width: '300px'
    },
    equation: {
      fontStyle: 'italic',
    },
    result: {
      fontWeight: 'bold'
    },
  });

  const classes = useStyles();

  const [kcalkg, setKcalkg] = React.useState(20);

  function handleChange(event, newValue) {
    setKcalkg(newValue);
  }

  function totalCalories() {
    return kcalkg * props.pt.weightKG
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" className={classes.cardTitle}>kcal / kg</Typography>
        <Slider
          className={classes.slider}
          min={10}
          max={50}
          defaultValue={20}
          value={kcalkg}
          aria-labelledby="discrete-slider-always"
          step={5}
          marks={[{value: 20, label: '20'}, {value: 30, label: '30'}, {value: 40, label: '40'}]}
          valueLabelDisplay="on"
          name="pal"
          onChange={handleChange}
        />
        <Typography className={classes.equation}>
          {`${kcalkg} kcal/kg`} = <span className={classes.result}>{`${totalCalories()}`}</span>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default KCalCard;