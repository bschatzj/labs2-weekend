import React, { useState, useEffect } from 'react';
import axios from 'axios';
import css from '../App.css'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DistanceTable from './DistanceTable';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export default function Profile(props) {
    const [volunteer, setVolunteer] = useState({})
    const [fams, setFams] = useState({})
    
    useEffect(() => {
        axios.get(`http://localhost:7000/api/users/userid/${props.match.params.id}`)
        .then(res => {
            console.log(res)
            setVolunteer(res.data)
        })
        .catch(err => {
            console.log(err)
        })

        axios.get(`http://localhost:7000/api/families/all`)
        .then(res => {
            setFams(res.data)
            console.log(fams)
        })
        .catch(err => {
            console.log(err)
        })

    }, []);


    const useStyles = makeStyles(theme => ({
    root: {
        color: "black",
        backgroundColor: "lightblue",
        marginTop: "5%",
        width: '80%',
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      Card: {
          marginTop: "0",
      },
      Paragraph: {
        color: "black",
        fontSize: "1.6rem"
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      Show: {
          display: "flex",
          width: "95%",
          justifyContent: "center",
      },
      Show2: {
        display: "flex",
        width: "100%",
        justifyContent: "flex-start",
    }
    }));
    
      const classes = useStyles();
      const [expanded, setExpanded] = React.useState(false);
    
      const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    
      return (
        <div className="centered">
        <Card className={classes.root}>
          <CardHeader
            title={`${volunteer.first_name}, ${volunteer.last_name}`}
          />
        <CardHeader
            paddingTop="0"
            marginTop="0"
            title={volunteer.city}
          />
          <CardContent>
            <Typography  className={classes.Paragraph}>
              H!!!
            </Typography>
          </CardContent>
          <CardActions   className={classes.Show} >
              <div className="end">
          {expanded === false? "See Potential Families": ""}
            </div>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
              <DistanceTable
                volunteer = {volunteer}
                Families = {fams}
              />
          </Collapse>


              {/* <CardContent className={classes.Show2}>
          <CardActions    >
              <div className="start">
          {expanded === false? "See Potential Families": ""}
            </div>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
              <h1>Edit Here</h1>
          </Collapse>
          </CardContent> */}
        </Card>
        </div>
      );
}