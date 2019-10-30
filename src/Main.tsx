import React from 'react';
import { Link, Redirect } from 'react-router-dom';
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
import { Container} from 'react-floating-action-button';
import Button from '@material-ui/core/Button';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import AIcon from '@material-ui/icons/Create';
import BIcon from '@material-ui/icons/Repeat';
import AddIcon from '@material-ui/icons/Add';
//List
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import { sizing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { shadows } from '@material-ui/system';

//card
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

import ButtonBase from '@material-ui/core/ButtonBase';

import {VictoryPie, VictoryTheme} from 'victory';
const actions = [
  { icon: <BIcon />, name: 'Past' , operation: 'b'},
  { icon: <AIcon />, name: 'New' , operation: 'a'},

];

const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },

    margin: {
      margin: theme.spacing(1),
    },

    avatar: {
      margin: 10,
      width: 60,
      height: 60,
    },
    bigAvatar: {
      margin: 10,
      width: 80,
      height: 80,
    },
    appBar: {
      top: 'auto',
      bottom: 0,
      alt: 'url(https://drive.google.com/drive/folders/1kHccHztwcp5w-LZSlY7tI755tlSCmHrA)', 
    },

    fabButton: {
      position: 'relative',
      zIndex: 1,
      top: 30,
      left: 25,
      right: 0,
      margin: '0 auto',
    },

    root: {
      height: 380,
      transform: 'translateZ(0px)',
      flexGrow: 1,
    },
    speedDial: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },

    list: {
      marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      // marginTop: theme.spacing(2),
    },
    paperpad: {
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),    
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
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

    image: {
      width: 128,
      height: 128,
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

    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },

    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

  

export const Main = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const redir = () => {
      return <Redirect to='/three' />
    };

    function handleClick (e,operation){
      e.preventDefault();
      if(operation=="a"){
        
      }else if(operation=="b"){
        
      }
      setOpen(!open);// to close the speed dial, remove this line if not needed.
    };

    return (
      <div>
        {/* app bar */}
        <AppBar position="sticky" style={{boxShadow: "none"}}>
        <Toolbar className={classes.toolbar}  >
        <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
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


        <React.Fragment>


        {/* List */}
        <List className={classes.list}>
          {/* 1 */}
          <Link to="one" style={{ textDecoration: 'none' }}>

          <div className={classes.paperpad}>
            <Paper className={classes.paper}>
              <Grid sm container>
                  <Grid item xs container direction="column" >
                    <Grid item xs>
                      <Typography variant="h6">
                        Coffee Workshop
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Time Value: 3 Days
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="primary">
                      <Typography variant="subtitle1">$250.00</Typography>
                    </Button>
                  </Grid>
              </Grid>
              <Grid item>
                      <Grid sm container>
                      <svg width={100} height={100}>
                      <text x={50} y={55} textAnchor="middle" >
                        90%
                      </text>
                          <VictoryPie
                            standalone={false}
                            width={100} height={100}
                            radius={40}
                            innerRadius={25}
                            labels={() => null}
                            data={[
                              { x: "18", y: 90 },
                              { x: "2", y: 10 }
                            ]}
                            colorScale={["#80CBC4", "#EEEEEE" ]}
                          />
                        </svg>
                        <Grid item xs container direction="column" >
                        <Typography variant="body1">
                          Coffee Roasting Workshop
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          (2 Days left)
                        </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
            </Paper>
          </div>

          <div className={classes.paperpad}>
            <Paper className={classes.paper}>
              <Grid sm container>
                  <Grid item xs container direction="column" >
                    <Grid item xs>
                      <Typography variant="h6">
                        Coffee Workshop 2
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Time Value: 3 Days
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="primary">
                      <Typography variant="subtitle1">$100.00</Typography>
                    </Button>
                  </Grid>
              </Grid>
              <Grid item>
                      <Grid sm container>
                      <svg width={100} height={100}>
                      <text x={50} y={55} textAnchor="middle" >
                        60%
                      </text>
                          <VictoryPie
                            standalone={false}
                            width={100} height={100}
                            radius={40}
                            innerRadius={25}
                            labels={() => null}
                            data={[
                              { x: "18", y: 60 },
                              { x: "2", y: 40 }
                            ]}
                            colorScale={["#80CBC4", "#EEEEEE" ]}
                          />
                        </svg>
                        <Grid item xs container direction="column" >
                        <Typography variant="body1">
                          Coffee Roasting Workshop
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          (2 Days left)
                        </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
            </Paper>
          </div>

          <div className={classes.paperpad}>
            <Paper className={classes.paper}>
              <Grid sm container>
                  <Grid item xs container direction="column" >
                    <Grid item xs>
                      <Typography variant="h6">
                        Coffee Workshop 3
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Time Value: 3 Days
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="primary">
                      <Typography variant="subtitle1">$600.00</Typography>
                    </Button>
                  </Grid>
              </Grid>
              <Grid item>
                      <Grid sm container>
                      <svg width={100} height={100}>
                      <text x={50} y={55} textAnchor="middle" >
                        15%
                      </text>
                          <VictoryPie
                            standalone={false}
                            width={100} height={100}
                            radius={40}
                            innerRadius={25}
                            labels={() => null}
                            data={[
                              { x: "18", y: 15 },
                              { x: "2", y: 85 }
                            ]}
                            colorScale={["#80CBC4", "#EEEEEE" ]}
                          />
                        </svg>
                        <Grid item xs container direction="column" >
                        <Typography variant="body1">
                          Coffee Roasting Workshop
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          (2 Days left)
                        </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
            </Paper>
          </div>

          </Link>
          
        </List>


        {/* App bar */}
        
        <Container>
        <Link to = "/three">
        <Fab color="primary" aria-label="add" className={classes.fabButton}>
        <AddIcon />
        </Fab>
        </Link>
        </Container>
    </React.Fragment>
    </div>
  );
}
