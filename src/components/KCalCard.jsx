import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';



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

  const [kcalkg, setKcalkg] = React.useState([20, 30]);
  const [protein, setProtein] = React.useState([1.0, 2.0]);

  function handleProteinChange(event, newValue) {
    setProtein(newValue);
  }

  function handleKcalChange(event, newValue) {
    setKcalkg(newValue);
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
          step={1}
          marks={[{value: 20, label: '20'}, {value: 30, label: '30'}, {value: 40, label: '40'}]}
          valueLabelDisplay="on"
          name="kcal"
          onChange={handleKcalChange}
        />
        <Typography className={classes.equation}>
          {`${kcalkg[0]} kcal/kg`} = <span className={classes.result}>{kcalkg[0] * props.pt.weightKG}</span>
        </Typography>
        <Typography className={classes.equation}>
          {`${kcalkg[1]} kcal/kg`} = <span className={classes.result}>{kcalkg[1] * props.pt.weightKG}</span>
        </Typography>

        <Typography variant="h6" className={classes.cardTitle}>protein g / kg</Typography>
        <Slider
          className={classes.slider}
          min={0.5}
          max={3.5}
          defaultValue={0.8}
          value={protein}
          aria-labelledby="discrete-slider-always"
          step={0.1}
          marks={[{value: 1.0, label: '1.0'}, {value: 2.0, label: '2.0'}, {value: 3.0, label: '3.0'}]}
          valueLabelDisplay="on"
          name="protein"
          onChange={handleProteinChange}
        />
        <Typography className={classes.equation}>
          {`${protein[0]} g/kg`} = <span className={classes.result}>{protein[0] * props.pt.weightKG}</span>
        </Typography>
        <Typography className={classes.equation}>
          {`${protein[1]} g/kg`} = <span className={classes.result}>{protein[1] * props.pt.weightKG}</span>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default KCalCard;