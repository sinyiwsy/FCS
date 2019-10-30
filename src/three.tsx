import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from  '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 500,
      maxHeight: 800,
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
    bigAvatar: {
      margin: 10,
      width: 80,
      height: 80,
    },

    toolbar: {
      minHeight: 160,
      alignItems: 'flex-start',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
    },
    
    title: {
      flexGrow: 1,
      alignSelf: 'flex-end',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);


export const Three = () => {
    const classes = useStyles();
    
    return(
        <div>
        <AppBar position="sticky" style={{boxShadow: "none"}}>
        <Toolbar className={classes.toolbar}  >
          <Link to= "/main" style={{ color: '#FFF' }}>
        <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          </Link>
        <Grid container className={classes.title} >
          <Grid className={classes.title}>
          <Typography variant="h5" noWrap>
          <Typography variant="h6">Hello, Henry.</Typography>
          <Typography >Monthly Deposits:</Typography>
          <Typography variant="h6">$3,024.00</Typography>
          {/* <Typography color="textSecondary">on 31 Oct, 2019</Typography> */}
          </Typography>
          </Grid>
          <Grid>
          <Avatar  alt="logo" src="/images/1.jpg" className={classes.bigAvatar} />
          <Typography align="center">
            <Box fontWeight="fontWeightBold">
            RECEIVABLE
            </Box>
          </Typography>
          </Grid>
        </Grid>
        <IconButton edge="end" color="inherit">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
        </div>


    )
}