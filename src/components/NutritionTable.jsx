import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import conditions from '../conditions'

function NutritionTable(props) {

  const useStyles = makeStyles({
    root: {
      marginLeft: "400"
    },
  });

  const classes = useStyles();

  return (
    <TableContainer className={classes.root} component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell align="right">Condition</TableCell>
            <TableCell align="right">Calories Kcal</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Remarks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {conditions.map((cond, i) => {
              return (
                <TableRow key={i}>
                  <TableCell align="right">{cond.name}</TableCell>
                  <TableCell align="right">
                    <span>{cond.calDesc}</span>
                    <span></span>
                  </TableCell>
                  <TableCell align="right">
                    <span>{cond.protDesc}</span>
                    <span></span>
                  </TableCell>
                  <TableCell align="right">
                    <span>{cond.remarks}</span>
                    <span></span>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>

  );
}

export default NutritionTable;