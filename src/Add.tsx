import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from  '@material-ui/icons/ArrowBackIos';

import Fab from '@material-ui/core/Fab';
import { Container} from 'react-floating-action-button';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },

    fabButton: {
        position: 'relative',
        zIndex: 1,
        top: 30,
        left: 25,
        right: 0,
        margin: '0 auto',
      },
    cover: {
      width: 151,
    },
  }));

export const Add = () => {
    const classes = useStyles();
    return(
        <div>
        <AppBar  position="sticky" style={{ backgroundImage: 'url(https://digitalsynopsis.com/wp-content/uploads/2017/07/beautiful-color-ui-gradients-backgrounds-peach.png)'}} >
        <Toolbar variant="dense">
        <Link to = "/one" >
          <IconButton edge="start" className={classes.menuButton} color="secondary" aria-label="menu">
            <MenuIcon />
          </IconButton>
          </Link>
          <Typography variant="h6" color="secondary">
            FCS
          </Typography>
        </Toolbar>
      </AppBar>
      <React.Fragment>

            <Container>
            <Link to = "/three" >
            <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <AddIcon />
            </Fab>
            </Link>
            </Container>
        </React.Fragment>
      </div>
    )
}