import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../GalleryPage/GalleryPage.css';
import { useHistory } from 'react-router';
import moment from 'moment';
// MUI
import Grid from '@mui/material/Grid';
import { Container, Paper } from '@mui/material';

function GalleryPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const gallery = useSelector(store => store.gallery);
    const moment = require('moment');
    // used for when clicked on a poster, movie data is recieved 
    // sends us to /details too

    // when page loads, get all the movies
    useEffect(() => {
        dispatch({ type: 'FETCH_GALLERY' });
    }, []);

    return ( 
    <Container>
    <h1>Welcome to Many Murals</h1>
        <Grid
            container
            spacing={3}
            justify="center"
            alignItems="center"
            

        >
    {gallery.map(item => (
        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Paper elevation={0}>
                <img className="galleryImage" src={item.images[0].url} alt={item.title}  
                    // onClick={() => { window.open(`https://www.google.com/maps/@${parseFloat(item.latitude)},${parseFloat(item.longitude)},${16}z`, "_blank") }}
                    onClick={() => { window.open(`http://maps.google.com/maps?q=${item.latitude},${item.longitude}`, "_blank") }}
                />
                <div className='artItemText'>
                <h4>{item.title} by {item.user_name}</h4>
                <p>{item.description}</p>
                Created {moment(`${item.date}`).fromNow()}
                </div>
            </Paper>
        </Grid>
    ))}
    </Grid>
    </Container>
    );
}

export default GalleryPage;