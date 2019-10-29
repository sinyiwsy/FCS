import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from  '@material-ui/icons/ArrowBackIos';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import * as reaviz from "reaviz";

import clsx from 'clsx';
import { createStyles,  Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Send';
import CheckIcon from '@material-ui/icons/Check';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

import SnackbarContent from '@material-ui/core/SnackbarContent';

const useStyles = makeStyles(theme => ({
  snackbar: {
    margin: theme.spacing(1),
  },
  
    menuButton: {
      marginRight: theme.spacing(2),
    },

    button: {
      margin: theme.spacing(1),
    },

    list: {
      marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
    card: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },

    cover: {
      width: 151,
    },

    bt: {
      display: 'flex',
      alignItems: 'center',
    },
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 250,
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    },
    buttonSuccess: {
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
    fabProgress: {
      color: green[500],
      position: 'absolute',
      top: -6,
      left: -6,
      zIndex: 1,
    },
    buttonProgress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
  }));



export const Add = () => {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef<number>();
  
    const buttonClassname = clsx({
      [classes.buttonSuccess]: success,
    });
  
    React.useEffect(() => {
      return () => {
        clearTimeout(timer.current);
      };
    }, []);

    const handleButtonClick = () => {
      if (!loading) {
        setSuccess(false);
        setLoading(true);
        setTimeout(() => {
          setSuccess(true);
          setLoading(false);
        }, 2000);
      }
    };

    const action = (
      <Button color="secondary" size="small" onClick={handleButtonClick}>
        One Press Remind All!
      </Button>
    );

    return(
        <div>
        <AppBar  position="sticky" style={{ backgroundImage: 'url(https://i.pinimg.com/originals/07/ed/e0/07ede021a54ec05e2b425a1bbf3fc070.png)'}} >
        <Toolbar variant="dense">
        <Link to = "/one" >
          <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu">
            <MenuIcon />
          </IconButton>
          </Link>
          <Typography variant="h6" color="textSecondary">
            FCS
          </Typography>
        </Toolbar>
      </AppBar>
      <React.Fragment>


      <List className={classes.list}>
            <Card className={classes.card}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                  Event2
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Date: 5 July<br/>
                    Venue: CUHK
                  </Typography>
                </CardContent>
              </div>

              <CardMedia
                className={classes.cover}>
              <reaviz.PieChart width={150} height={150} data={[
                    { key: "Paid", data: 14 },
                    { key: "Not", data: 5 },
                ]}

                 />
            </CardMedia>
            </Card> 
        
        </List>
    
    <SnackbarContent className={classes.snackbar} message="Breakdown" action={action} />

    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="WIN" secondary="$50" />
        <ListItemSecondaryAction>
            <div className={classes.bt}>
          <div className={classes.wrapper}>
            <Button
              variant="contained"
              color="primary"
              className={buttonClassname}
              disabled={loading}
              onClick={handleButtonClick}
            >
              {success ? <CheckIcon /> : <SaveIcon />}
            </Button>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          </div>
        </div>
        </ListItemSecondaryAction>
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="WIN" secondary="$50" />
        <ListItemSecondaryAction>
            <div className={classes.bt}>
          <div className={classes.wrapper}>
            <Button
              variant="contained"
              color="primary"
              className={buttonClassname}
              disabled={loading}
              onClick={handleButtonClick}
            >
              {success ? <CheckIcon /> : <SaveIcon />}
            </Button>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          </div>
        </div>
        </ListItemSecondaryAction>
      </ListItem>


      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="WIN" secondary="$50" />
        <ListItemSecondaryAction>
            <div className={classes.bt}>
          <div className={classes.wrapper}>
            <Button
              variant="contained"
              color="primary"
              className={buttonClassname}
              disabled={loading}
              onClick={handleButtonClick}
            >
              {success ? <CheckIcon /> : <SaveIcon />}
            </Button>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          </div>
        </div>
        </ListItemSecondaryAction>
      </ListItem>



      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="WIN" secondary="$50" />
        <ListItemSecondaryAction>
            <div className={classes.bt}>
          <div className={classes.wrapper}>
            <Button
              variant="contained"
              color="primary"
              className={buttonClassname}
              disabled={loading}
              onClick={handleButtonClick}
            >
              {success ? <CheckIcon /> : <SaveIcon />}
            </Button>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          </div>
        </div>
        </ListItemSecondaryAction>
      </ListItem>



      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="WIN" secondary="$50" />
        <ListItemSecondaryAction>
            <div className={classes.bt}>
          <div className={classes.wrapper}>
            <Button
              variant="contained"
              color="primary"
              className={buttonClassname}
              disabled={loading}
              onClick={handleButtonClick}
            >
              {success ? <CheckIcon /> : <SaveIcon />}
            </Button>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          </div>
        </div>
        </ListItemSecondaryAction>
      </ListItem>


      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="WIN" secondary="$50" />
        <ListItemSecondaryAction>
            <div className={classes.bt}>
          <div className={classes.wrapper}>
            <Button
              variant="contained"
              color="primary"
              className={buttonClassname}
              disabled={loading}
              onClick={handleButtonClick}
            >
              {success ? <CheckIcon /> : <SaveIcon />}
            </Button>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          </div>
        </div>
        </ListItemSecondaryAction>
      </ListItem>
    </List>






      </React.Fragment>
      </div>
      
    )
}