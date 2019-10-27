import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },

  avatar: {
    margin: 10,
    width: 60,
    height: 60,
  },

  appBar: {
    top: 'auto',
    bottom: 0,
    alt: 'url(https://drive.google.com/drive/folders/1kHccHztwcp5w-LZSlY7tI755tlSCmHrA)', 
  },

  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  
  list: {
    marginBottom: theme.spacing(2),
  },

  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  image: {
    backgroundImage: 'url(https://drive.google.com/drive/folders/1kHccHztwcp5w-LZSlY7tI755tlSCmHrA)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  depositContext: {
    flex: 1,
  },
  
}));

export const Add = () => {
  const classes = useStyles();
  const boxTheme = {
    spacing: [0, 2, 3, 5, 8],
  }
  
  return (

    
    
    <div>
    {/* app bar */}
    <Box position="static" color="primary" height="250px" style={{ backgroundImage: 'url(https://digitalsynopsis.com/wp-content/uploads/2017/07/beautiful-color-ui-gradients-backgrounds-peach.png)'}}>
      <Toolbar variant="dense" >
        <Box p={2} mx={3} my={3}>
          <Grid container >
            <Avatar alt="Profile Picture" src="https://d22ir9aoo7cbf6.cloudfront.net/wp-content/uploads/sites/6/2018/11/gifts-for-men-in-Hong-Kong-MAIN-IMAGE-1024x802.jpg" className={classes.avatar}></Avatar>
            <Grid><h4>Leo Chan</h4></Grid>
              </Grid>
              <React.Fragment>
                <Typography>Recent Deposits</Typography>
                <Typography variant="h6">$3,024.00</Typography>
                <Typography color="textSecondary">on 15 March, 2019</Typography>
          </React.Fragment>
        </Box>
      </Toolbar>
    </Box>

    

    </div>

  );
}
