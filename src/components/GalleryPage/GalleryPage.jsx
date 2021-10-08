import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../GalleryPage/GalleryPage.css';
import { useHistory } from 'react-router';
import moment from 'moment';
// MUI
import Grid from '@mui/material/Grid';
import { Container, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';

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
      <Container >
        <h1>Gallery</h1>
            <p>Click on an image to see it's location!</p>
        <Grid
            container
            spacing={3}
            justify="center"
            alignItems="center"
            

        >
    {gallery.map(item => (
        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
        <Paper elevation={0} >
          <br />
          <br />
                <img className="galleryImage" src={item.images[0].url} alt={item.title}  style={{height:"100%", width: "300px", paddingLeft: "22px"}}
                    // onClick={() => { window.open(`https://www.google.com/maps/@${parseFloat(item.latitude)},${parseFloat(item.longitude)},${16}z`, "_blank") }}
                    onClick={() => { window.open(`http://maps.google.com/maps?q=${item.latitude},${item.longitude}`, "_blank") }}
                />

                <div style={{paddingLeft: "22px"}}>
                <Typography
                    style={{ fontSize: "14px" }}
                  variant="p">
                    Created {moment(`${item.date}`).fromNow()}
                </Typography>
                
                <Typography
                  variant="h4">
                    {item.title}
                </Typography>
                
                <Typography
                  variant="h6">
                    by {item.user_name}
                  </Typography>

                
                <Typography
                  variant="p"
                  style={{paddingRight: "10px"}}>
                    {item.description}
                  </Typography>
                </div>
                
                

            </Paper>
        </Grid>
    ))}
    </Grid>
    </Container>
    );
}

export default GalleryPage;