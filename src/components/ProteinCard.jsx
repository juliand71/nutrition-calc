import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';



function ProteinCard(props) {
  const useStyles = makeStyles({
    root: {
      width: '400px',
      margin: '20px',
      display: 'flex',
    },
    cardTitle: {
      fontWeight: 'bold',
      marginBottom: '50px',
    },
    slider: {
      width: '300px',
    },
    equation: {
      fontStyle: 'italic',
    },
    result: {
      fontWeight: 'bold'
    },
  });

  const classes = useStyles();

  const [protein, setProtein] = React.useState(0.8);

  function handleChange(event, newValue) {
    setProtein(newValue);
  }

  function totalProtein() {
    return protein * props.pt.weightKG
  }

  return (
    <Card className={classes.root}>
      <CardContent>
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
          name="pal"
          onChange={handleChange}
        />
        <Typography className={classes.equation}>
          {`${protein} g/kg`} = <span className={classes.result}>{`${totalProtein()}`}</span>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProteinCard;