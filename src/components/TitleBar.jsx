import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function TitleBar() {
  const useStyles = makeStyles(() => ({
    appBar: {
      zIndex: 1,
    },
  }));
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
    <Toolbar>
      <Typography variant="h6" noWrap>
        Nutrition Calculation
      </Typography>
    </Toolbar>
  </AppBar>
  );
}

export default TitleBar;