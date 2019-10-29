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
import * as reaviz from "reaviz";
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
        <AppBar  position="sticky" style={{ backgroundImage: 'url(https://i.pinimg.com/originals/07/ed/e0/07ede021a54ec05e2b425a1bbf3fc070.png)'}} >
        <Toolbar variant="dense">
        <Link to = "/main" >
          <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu">
            <MenuIcon />
          </IconButton>
          </Link>
          <Typography variant="h6" color="textSecondary">
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
            <Typography align="center" variant="h6">
                  Summary
                  </Typography>
                  <br/>
            <reaviz.BarChart
                data={[
                    { key: "1", data: 14 },
                    { key: "2", data: 5 },
                    { key: "3", data: 18 },
                    { key: "4", data: 13 },
                    { key: "5", data: 12 },
                    { key: "6", data: 1 },
                    { key: "7", data: 5 },
                    { key: "8", data: 9 }
                ]}
                width={300}
                height={150}
                gridlines={<reaviz.GridlineSeries />}
                series={
                    <reaviz.BarSeries
                    bar={
                        <reaviz.Bar
                        width={12}
                        animated={false}
                        //gradient={false}
                        groupIndex={1}
                        padding={30}
                        rounded={true}
                        //tooltip={<reaviz.Tooltip content={"hello world"} />}
                        />
                    }
                    />
                }
                />
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