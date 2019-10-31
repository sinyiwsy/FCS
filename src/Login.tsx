import React, { useRef, useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import Paper from '@material-ui/core/Paper';
import Helmet from 'react-helmet';

const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh',
    },
    paper: {
      marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(5),
    },
    avatar: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(10),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(15, 0, 2),
    },
    buttonPack:{
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));

export const Login = () => {
    const classes = useStyles();

  return (
      <div >
      <Helmet bodyAttributes={{style: 'background-color : #80CBC4'}}/>

        <Paper className={classes.paper}>
        <Box position="static"  p={2} mx={0} my={0}>
        <Typography component="h1" variant="h2" color="textSecondary">
          Sign In
        </Typography>
        </Box>
        <Box position="static"  p={2} mx={0} my={2}>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="mobile"
              label="Mobile Number"
              name="mobile"
              autoComplete="mobile"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Link to='/main' style={{ textDecoration: 'none' }}>
              <Button type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >Sign In
              </Button>
            </Link>
          </form>
          </Box>
          </Paper>
    </div>
  );
}