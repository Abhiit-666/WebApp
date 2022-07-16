import React,{useEffect} from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import {getPosts} from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';


//functional component
const App=()=>{
    const classes=useStyles();
    const dispatch=useDispatch();

    //detting data from the actions and dispatching to the reducers?
    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch]);
    
    return(
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.image} variant='h2' align="center">Memories</Typography>
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
};
export default App;