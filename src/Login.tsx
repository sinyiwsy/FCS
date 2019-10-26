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



const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh',
    },
    paper: {
      backgroundImage: 'url(https://digitalsynopsis.com/wp-content/uploads/2017/07/beautiful-color-ui-gradients-backgrounds-peach.png)',
      marginBottom: theme.spacing(0),
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
      <div>
        <Typography component="h1" variant="h4">
          Sign in
        </Typography>
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
            <Link to='/main'>
              <Button type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >Sign In
              </Button>
            </Link>
          </form>
    </div>
  );
}