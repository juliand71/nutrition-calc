import React from 'react';
import {useSelector, useDispatch} from 'react-redux'

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
import allActions from '../actions';
import ConditionSelect from './ConditionSelect';
import AmputationSelect from './AmputationSelect';

const drawerWidth = 330;

function PatientForm() {
  const useStyles = makeStyles(() => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      margin: ' 75px 10px',
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
      width: '90%'
    },
    palLabel: {
      marginBottom: '30px'
    },
    palInput: {
      width: '80%',
      marginLeft: '8%'
    },
  }));

  const classes = useStyles();

  const currentPatient = useSelector(state => state.currentPatient);
  const dispatch = useDispatch();

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
        <RadioGroup aria-label="gender" name="gender" value={currentPatient.gender} onChange={ (event) => dispatch(allActions.patientActions.setGender(event.currentTarget.value))}>
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
          value={currentPatient.age}
          onChange={(event) => dispatch(allActions.patientActions.setAge(event.currentTarget.value))}   
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
          value={currentPatient.heightCM}
          onChange={(event) => dispatch(allActions.patientActions.setHeightCM(event.currentTarget.value))}  
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
          value={currentPatient.heightIN}
          onChange={(event) => dispatch(allActions.patientActions.setHeightIN(event.currentTarget.value))}  
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
          value={currentPatient.weightKG}
          onChange={(event) => dispatch(allActions.patientActions.setWeightKG(event.currentTarget.value))}  
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
          value={currentPatient.weightLB}
          onChange={(event) => dispatch(allActions.patientActions.setWeightLB(event.currentTarget.value))}  
          className={classes.conversionInput}
        />
      </div>

      <div className={classes.inputGroup}>
        <Typography id="discrete-slider-always" gutterBottom className={classes.palLabel}>
          PAL
        </Typography>
        <Slider
          min={0.7}
          max={3.0}
          defaultValue={[1.2, 2.0]}
          value={currentPatient.pal}
          aria-labelledby="discrete-slider-always"
          step={0.1}
          marks={pals}
          valueLabelDisplay="on"
          name="pal"
          onChange={(event, newValue) => dispatch(allActions.patientActions.setPAL(newValue))} 
          className={classes.palInput}
        />
      </div>
      <ConditionSelect />
      <AmputationSelect />
    </Drawer>
  );
}

export default PatientForm;