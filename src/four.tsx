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

const useStyles2 = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 376,
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
            <Box position="static" color="primary" height="70px" style={{ backgroundImage: 'url(https://digitalsynopsis.com/wp-content/uploads/2017/07/beautiful-color-ui-gradients-backgrounds-peach.png)'}}>
                <Toolbar variant="dense" >
                    <Box p={2} mx={0} my={-2.3}>
                    <h4>Config Payment</h4>
                    </Box>
                </Toolbar>
            </Box>

            <Box position="static" color="primary" height="70px" p={3} mx={2} my={-2}>
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

            <Box color="primary" marginTop="270px" height="240px"  style={{ backgroundImage: 'url(https://i.pinimg.com/originals/9c/ce/d3/9cced3264a1e7b144467f506923ebb0b.jpg)'}}>
            <TextField 
                label="Discount Code"
                style={{ marginTop: -10, marginLeft: 39}}
                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                }}
                />
            <Box color="primary" p={0} mx={6} my={-3}>
                <Link to="/four">
                    <h6>+ Further Discount Code</h6>
                </Link>
            </Box>
            <Box  p={0} mx={10} my={10}>
            <Button variant="contained">Process Payment</Button>
            </Box>
            </Box>

        </div>
    )
}