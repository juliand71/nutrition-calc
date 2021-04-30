

import React from "react";

import {
  makeStyles,
  useTheme
} from '@material-ui/core/styles';


import {useSelector, useDispatch} from 'react-redux'
import allActions from "../actions";
import { Checkbox, FormControl, FormControlLabel, FormGroup } from "@material-ui/core";

function AmputationSelect() {


  const currentAmputations = useSelector(state => state.currentAmputations);
  const dispatch = useDispatch();

  function updateAmputations(event) {
    dispatch(allActions.amputationActions.setAmputations({ ...currentAmputations, [event.target.name]: event.target.checked }));
  }

  return (
    <div>
      <FormControl>
        <FormGroup>
          {/**
            If the leg is amputated, so is the calf and foot, so we use the OR operator to automatically fill in the check boxes
           */}
          <FormControlLabel
            control={
              <Checkbox 
                checked={currentAmputations.leftLeg} 
                onChange={updateAmputations} 
                name="leftLeg" 
              />
            }
            label="Left Leg"
          />
          <FormControlLabel
            control={
              <Checkbox 
                checked={currentAmputations.leftCalf || currentAmputations.leftLeg} 
                onChange={updateAmputations} 
                name="leftCalf" 
              />
            }
            label="Left Calf"
          />
          <FormControlLabel
            control={
              <Checkbox 
                checked={currentAmputations.leftFoot || currentAmputations.leftCalf || currentAmputations.leftLeg} 
                onChange={updateAmputations} 
                name="leftFoot"
              />
            }
            label="Left Foot"
          />
        </FormGroup>
      </FormControl>
      <FormControl>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox 
                checked={currentAmputations.rightLeg} 
                onChange={updateAmputations} 
                name="rightLeg"
              />
            }
            label="Right Leg"
          />
          <FormControlLabel
            control={
              <Checkbox 
                checked={currentAmputations.rightCalf || currentAmputations.rightLeg} 
                onChange={updateAmputations} 
                name="rightCalf"
              />
            }
            label="Right Calf"
          />
          <FormControlLabel
            control={
              <Checkbox 
                checked={currentAmputations.rightFoot || currentAmputations.rightCalf || currentAmputations.rightLeg} 
                onChange={updateAmputations} 
                name="rightFoot"
              />
            }
            label="Right Foot"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default AmputationSelect;