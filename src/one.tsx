import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from  '@material-ui/icons/ArrowBackIos';

import List from '@material-ui/core/List';
import Fab from '@material-ui/core/Fab';
import { Container} from 'react-floating-action-button';
import AddIcon from '@material-ui/icons/Add';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },

    fabButton: {
        position: 'relative',
        zIndex: 1,
        top: 30,
        left: 25,
        right: 0,
        margin: '0 auto',
      },
      list: {
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(2),
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
  }));

export const One = () => {
    const classes = useStyles();

    return(
        <div>
        <AppBar  position="sticky"style={{boxShadow: "none"}} >
        <Toolbar variant="dense">
        <Link to = "/main"  style={{ color: '#FFF' }}>
          <IconButton edge="start"  color="inherit" className={classes.menuButton} aria-label="menu">
            <MenuIcon />
          </IconButton>
          </Link>
          <Typography variant="h6" color="inherit">
            FCS
          </Typography>
        </Toolbar>
      </AppBar>
      <React.Fragment>

        {/* List */}
        <List className={classes.list}>
          {/* 1 */}
          <Link to="one" style={{ textDecoration: 'none' }}>
            <Card className={classes.card}>
            <CardContent className={classes.content}>
            
            </CardContent>
            </Card>
          </Link>
          <br/>
          {/* 2 */}
          <Link to="add" style={{ textDecoration: 'none' }}>
            <Card className={classes.card}>
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

              <CardMedia
                className={classes.cover}>
              <reaviz.PieChart width={150} height={150} data={[
                    { key: "Paid", data: 14 },
                    { key: "Not", data: 5 },
                ]}

                 />
            </CardMedia>
            </Card>
          </Link> 

          <br/>
          {/* 3 */}
          <Link to="add" style={{ textDecoration: 'none' }}>
            <Card className={classes.card}>
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
              <CardMedia
                className={classes.cover}>
              <reaviz.PieChart width={150} height={150} data={[
                    { key: "Paid", data: 45 },
                    { key: "Not", data: 5 },
                ]}

                 />
            </CardMedia>

            </Card>
          </Link> 
          <br/>
          {/* 4 */}
          <Link to="add" style={{ textDecoration: 'none' }}>
            <Card className={classes.card}>
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
              <CardMedia
                className={classes.cover}>
              <reaviz.PieChart width={150} height={150} data={[
                    { key: "Paid", data: 14 },
                    { key: "Not", data: 30 },
                ]}

                 />
            </CardMedia>
            </Card>
          </Link>  

        </List>












            <Container>
            <Link to = "/three" >
            <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <AddIcon />
            </Fab>
            </Link>
            </Container>
        </React.Fragment>
      </div>
    )
}