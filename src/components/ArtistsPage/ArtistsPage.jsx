import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../ArtistsPage/ArtistsPage.css';
import { useHistory } from 'react-router';
import Typography from '@mui/material/Typography';

// MUI
import Grid from '@mui/material/Grid';
import { Container, Paper } from '@mui/material';

function ArtistsPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const artists = useSelector(store => store.artists);
    // used for when clicked on a poster, movie data is recieved 
    // sends us to /details too
    console.log(artists);
    // when page loads, get all the movies
    useEffect(() => {
        dispatch({ type: 'FETCH_ARTISTS' });
    }, []);

    return (
    <Container>
        <Grid
            container
            spacing={3}
            justify="center"
            alignItems="center"
            
        >
        {artists.map(artist => (
                
                <Grid item key={artist.id} xs={12} sm={6} md={4} lg={3}>
                    <Paper  elevation={0}>
                        <Typography
                            variant="h6"
                        >
                            Meet {artist.name}!  
                        </Typography>
                            
                        <Typography
                            variant="p"
                        >
                            {artist.description}
                        </Typography>
                    </Paper>
            
                    {/*  */}
                        <Paper elevation={0}>
                        <img className="imageOfArtist" src={artist.profile_image} alt={artist.name}/>   
                        </Paper>
                   </Grid>
                    ))}  
        </Grid>
    </Container>
    );
}

export default ArtistsPage;

{/* <Container>
    <h1>Welcome to the Gallery</h1>
        <Grid
            container
            spacing={3}
            justify="center"
            alignItems="center"
            

        >
    {gallery.map(item => (
        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Paper elevation={0}>
                <img className="galleryImage" src={item.images[0].url} alt={item.title} />
                <div className='artItemText'>
                <h4>{item.title} by {item.user_name}</h4>
                <p>{item.description}</p>
                <p>{item.date}</p>
                </div>
            </Paper>
        </Grid>
    ))}
    </Grid>
    </Container> */}