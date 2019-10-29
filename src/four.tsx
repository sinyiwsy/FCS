import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles} from '@material-ui/core/styles';

import { red } from '@material-ui/core/colors';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';

import PaymentIcon from '@material-ui/icons/Payment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import AppBar from '@material-ui/core/AppBar';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles2 = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 500,
      maxHeight: 667,
    },
    media: {
      height: 0,
      paddingTop: '40%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    
    avatar: {
      margin: 10,
      width: 60,
      height: 60,
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    image: {
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  }));

export const Four = () => {
    const classes2 = useStyles2();
    const classes = useStyles();

    return(
        <div>
            <AppBar  position="sticky" style={{ backgroundImage: 'url(https://i.pinimg.com/originals/07/ed/e0/07ede021a54ec05e2b425a1bbf3fc070.png)'}} >
            <Toolbar variant="dense">
              <IconButton edge="start" className={classes.menuButton} color="default" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="textSecondary">
              Config Payment
              </Typography>
            </Toolbar>
          </AppBar>

            <Box position="static" color="primary" height="70px" p={6} mx={2} my={-2}>
            <h4>Payment - Latte Art Workshop</h4>
                <FormControl >
                    <InputLabel htmlFor="input-with-icon-adornment">Base Charges</InputLabel>
                        <Input id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <PaymentIcon />
                                </InputAdornment>
                            }
                        />
                </FormControl>
                <h4></h4>
                <FormControl >
                    <InputLabel htmlFor="input-with-icon-adornment">Deposit</InputLabel>
                        <Input id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <AttachMoneyIcon />
                                </InputAdornment>
                            }
                        />
                </FormControl>
                <h4></h4>
                <FormControl >
                    <InputLabel htmlFor="input-with-icon-adornment">Settlement</InputLabel>
                        <Input id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <MobileScreenShareIcon />
                                </InputAdornment>
                            }
                        />
                </FormControl>
            </Box>

            <Box color="primary" marginTop="270px" height="240px" >
            <TextField 
                label="Discount Code"
                style={{ marginTop: 0, marginLeft: 70}}
                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                }}
                />
            <Box color="primary" p={0} mx={9} my={-3}>
                <Link to="/four">
                    <h6>+ Further Discount Code</h6>
                </Link>
            </Box>
            <Box  p={0} mx={13} my={10}>
            <Button variant="contained">Process Payment</Button>
            </Box>
            </Box>

        </div>
    )
}