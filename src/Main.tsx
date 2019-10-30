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
      marginTop: theme.spacing(2),
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
          <Typography color="textSecondary">on 31 Oct, 2019</Typography>
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
            <Card className={classes.card}>
              <CardMedia
                className={classes.cover}
                image="/images/cards/1.jpg"
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                  Event1
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Date: 5 July<br/>
                    Venue: CUHK
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Link>

          <br/>
          {/* 2 */}
          <Link to="one" style={{ textDecoration: 'none' }}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cover}
                image="/images/cards/2.jpg"
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                  Event2
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Date: 5 July<br/>
                    Venue: CUHK
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Link> 

          <br/>
          {/* 3 */}
          <Link to="one" style={{ textDecoration: 'none' }}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cover}
                image="/images/cards/3.jpg"
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    Event3
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Date: 5 July<br/>
                    Venue: CUHK
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Link> 
          <br/>
          {/* 4 */}
          <Link to="one" style={{ textDecoration: 'none' }}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cover}
                image="/images/cards/4.jpg"
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                  Event4
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Date: 5 July<br/>
                    Venue: CUHK
                  </Typography>
                </CardContent>
              </div>
            </Card>
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
