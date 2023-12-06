import React,{useEffect} from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@mui/material';
import { useDispatch } from 'react-redux';
import logo from './components/images/logo2.PNG';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles.js';
import {getPosts} from './actions/posts'

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch])
  return (
    <Container maxwidht='lg'>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
            Memories
        </Typography>
        <img className={classes.image} src={logo} alt="memories" height="60"/>
      </AppBar>
      <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                            <Posts/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                </Grid>
            </Container>
      </Grow>
    </Container>
  )
}

export default App;
