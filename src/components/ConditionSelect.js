import React from "react";
import conditions from '../conditions';

import {
  makeStyles,
  useTheme
} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

import {useSelector, useDispatch} from 'react-redux'
import allActions from "../actions";

function ConditionSelect() {


  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }));

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  function getStyles(name, conditionName, theme) {
    return {
      fontWeight: conditionName.indexOf(name) === -1 ?
        theme.typography.fontWeightRegular :
        theme.typography.fontWeightMedium,
    };
  }


  const classes = useStyles();
  const theme = useTheme();

  const currentConditions = useSelector(state => state.currentConditions);
  const dispatch = useDispatch();

  const [selectedConditions, setSelectedConditions] = React.useState([]);

  function updateConditions(event) {
    setSelectedConditions(event.target.value);
    dispatch(allActions.conditionActions.setConditions(event.target.value));
  }

  return (
     <FormControl className = {classes.formControl} >
      <InputLabel id = "demo-mutiple-chip-label">Patient Conditions</InputLabel> 
        <Select 
          labelId = "demo-mutiple-chip-label"
          id = "demo-mutiple-chip"
          multiple 
          value = {selectedConditions}
          onChange = {updateConditions}
          input = {<Input id = "select-multiple-chip" />}
          renderValue = {(selected) => ( 
            <div className = {classes.chips}> 
              {selected.map((condition) => ( 
                <Chip key = {condition}
                  label = {condition}
                  className = {classes.chip}
                />
              ))}
            </div>
          )}
          MenuProps = {MenuProps}
        >
          {conditions.map((c) => (
            <MenuItem key={c.name} value={c.name} style={getStyles(c.name, selectedConditions, theme)}>
              {c.name}
            </MenuItem>
          ))}
        </Select> 
    </FormControl>
  );
}

export default ConditionSelect;