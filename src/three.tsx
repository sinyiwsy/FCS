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

const useStyles2 = makeStyles((theme: Theme) =>
  createStyles({
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

export const Three = () => {
    const classes2 = useStyles2();
    const classes = useStyles();
    
    return(
        <div>
            <Box position="static" color="primary" height="250px" style={{ backgroundImage: 'url(https://i.pinimg.com/originals/07/ed/e0/07ede021a54ec05e2b425a1bbf3fc070.png)'}}>
                <Toolbar variant="dense" >
                    <Box p={2} mx={3} my={3}>
                        <React.Fragment>
                            <Avatar alt="Profile Picture" src="https://d22ir9aoo7cbf6.cloudfront.net/wp-content/uploads/sites/6/2018/11/gifts-for-men-in-Hong-Kong-MAIN-IMAGE-1024x802.jpg" className={classes.avatar}></Avatar>
                            <Typography>Recent Deposits</Typography>
                            <Typography variant="h6">$3,024.00</Typography>
                            <Typography color="textSecondary">on 15 March, 2019</Typography>
                        </React.Fragment>
                    </Box>
                </Toolbar>
            </Box>

            <Card className={classes2.card} >
                <CardHeader avatar={
                    <Avatar aria-label="recipe" className={classes2.avatar}>
                    R
                    </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                        <MoreVertIcon />
                        </IconButton>
                    }
                    title="Latte Art Workshop"
                    subheader="September 14, 2019"
                    />
            <Link to="/four">
            <CardMedia
                className={classes2.media}
                image="https://academiedecafedemontreal.com/wp-content/uploads/2016/12/acm_siteweb_latteart01-1000x667.jpg"
                title="Paella dish"
            />
            </Link>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="h6">
                Any individual bookings exceeding the max. capacity are to be quoted separately as a Private Event.
                </Typography>
            </CardContent>
                <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>


    )
}