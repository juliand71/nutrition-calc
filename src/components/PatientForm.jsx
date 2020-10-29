import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import pals from '../pals';

const drawerWidth = 250;

function PatientForm(props) {
  const useStyles = makeStyles(() => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      margin: '10px',
    },
    inputGroup: {
      marginBottom: '20px',
    },
    conversionInput: {

      maxWidth: '44%',
      margin: '0.5%'
    },
    ageInput: {
      margin: '0.25%',
    },
    palInput: {
      width: '80%',
      marginLeft: '10px'
    },

  }));

  const classes = useStyles();

  function handleChange(event) {
    const {name, value} = event.target;
    props.onUpdate(name, value);
  }

  function handleSliderChange(event, newValue) {
    props.onUpdate("pal", newValue);
  }

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender" value={props.pt.gender} onChange={handleChange}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>


      <div className={classes.inputGroup}>
        <TextField
          id="age"
          name="age"
          label="Age"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={props.pt.age}
          onChange={handleChange}   
          className={classes.ageInput}      
        />
      </div>

      <div className={classes.inputGroup}>
        <TextField
          id="height-cm"
          name="heightCM"
          label="Height (cm)"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={props.pt.heightCM}
          onChange={handleChange}
          className={classes.conversionInput}
        />
        <TextField
          id="height-in"
          name="heightIN"
          label="Height (in)"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={props.pt.heightIN}
          onChange={handleChange}
          className={classes.conversionInput}
        />
      </div>

      <div className={classes.inputGroup}>
        <TextField
          id="weight-kg"
          name="weightKG"
          label="Weight (kg)"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={props.pt.weightKG}
          onChange={handleChange}
          className={classes.conversionInput}
        />
        <TextField
          id="weight-lb"
          name="weightLB"
          label="Weight (lb)"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={props.pt.weightLB}
          onChange={handleChange}
          className={classes.conversionInput}
        />
      </div>

      <div className={classes.palInput}>
        <Typography id="discrete-slider-always" gutterBottom>
          PAL
        </Typography>
        <Slider
          min={1.2}
          max={2.7}
          defaultValue={1.2}
          value={props.pt.pal}
          aria-labelledby="discrete-slider-always"
          step={0.1}
          marks={pals}
          valueLabelDisplay="on"
          name="pal"
          onChange={handleSliderChange}
        />
      </div>


    </Drawer>

  );
}

export default PatientForm;