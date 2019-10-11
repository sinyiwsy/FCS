import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
//Heading
import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';
//App bar
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({

    avatar: {
      margin: 10,
      width: 60,
      height: 60,
    },

    appBar: {
      top: 'auto',
      bottom: 0,
    },

    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },

  }));

export const Main = () => {
    const classes = useStyles();
    return (
      <React.Fragment>
        <h6>Main</h6>
        <Avatar className={classes.avatar}>H</Avatar>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
        <HomeIcon color="inherit" />
          <Link to="add">
            <Fab color="secondary" aria-label="add" className={classes.fabButton}>
              Add
            </Fab>
          </Link>
          {/* <div className={classes.grow} /> */}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
