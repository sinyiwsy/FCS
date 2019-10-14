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

  }));



export const Main = () => {
    const classes = useStyles();
    return (
      <React.Fragment>
        {/* app bar */}

        <AppBar  position="sticky" color="primary"  >
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            FCS
          </Typography>
        </Toolbar>
      </AppBar>

        <Grid container>
          <Grid >
            <Avatar className={classes.avatar}>H</Avatar>
          </Grid>
          <Grid>
          <h4>Your Name<br/>$10000</h4>
          
          </Grid>
        </Grid>

        {/* List */}
        <List className={classes.list}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && <ListSubheader  className={classes.subheader}>Today</ListSubheader>}
              {id === 3 && <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>}
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>


        {/* App bar */}
      <AppBar position="sticky" color="primary" className={classes.appBar}>
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
  );
}
