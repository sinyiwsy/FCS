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
      backgroundImage: 'url(https://convertingcolors.com/gradient-80CBC4.svg)',
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
        <Box position="static" height="700px" p={10} mx={-8} my={0} style={{ backgroundImage: 'url(https://i.pinimg.com/originals/07/ed/e0/07ede021a54ec05e2b425a1bbf3fc070.png)'}}>
        <Box position="static"  p={0} mx={0} my={0}>
        <Typography component="h1" variant="h2" color="textSecondary">
          Sigh In
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
          </Box>
        </Box>
    </div>
  );
}