import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
//Bar
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//Heading
import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
//App bar
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
//List
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import { sizing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const messages = [
  {
    id: 1,
    primary: 'Name 1',
    secondary: 'Paid $200 for class',
    person: '/images/null.jpg',
  },
  {
    id: 2,
    primary: 'Name 2',
    secondary: 'Paid $200 for class',
    person: '/images/1.jpg',
  },
  {
    id: 3,
    primary: 'Name 3',
    secondary: 'Paid $200 for class',
    person: '/images/null.jpg',
  },
  {
    id: 4,
    primary: 'Name 4',
    secondary: 'Paid $200 for class',
    person: '/images/null.jpg',
  },
  {
    id: 5,
    primary: "Name 5",
    secondary: 'Paid $200 for class',
    person: '/images/1.jpg',
  },
  {
    id: 6,
    primary: 'Name 6',
    secondary: 'Paid $200 for class',
    person: '/images/1.jpg',
  },
  {
    id: 7,
    primary: 'Name 7',
    secondary: 'Paid $200 for class',
    person: '/images/1.jpg',
  },
];

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
  }));

  

export const Main = () => {
    const classes = useStyles();
    return (
      <div>
        {/* app bar */}
        <Box position="static" color="primary" height="250px" style={{ backgroundImage: 'url(https://digitalsynopsis.com/wp-content/uploads/2017/07/beautiful-color-ui-gradients-backgrounds-peach.png)'}}>
            <Toolbar variant="dense" >
            <Box p={2} mx={2} my={3}>
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

        <React.Fragment>
        {/* List */}
        <List className={classes.list}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id} >
              {id === 1 && 
              <ListSubheader className={classes.subheader}>Today
              </ListSubheader>}
              {id === 3 && <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>}
              <Link to="/add" style={{ textDecoration: 'none', color: '#1f1f1f'}}>
                <ListItem button>
                    <ListItemAvatar>
                      <Avatar alt="Profile Picture" src="data:image/png;base64,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" />
                    </ListItemAvatar>
                  <ListItemText primary={primary} secondary={secondary} />
                </ListItem>
              </Link>
            </React.Fragment>
          ))}
        </List>


        {/* App bar */}
      <AppBar position="sticky" className={classes.appBar}>
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
    </div>
  );
}
