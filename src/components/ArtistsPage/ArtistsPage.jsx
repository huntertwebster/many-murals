import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import CSS for the gallery here
import { useHistory } from 'react-router';
import Typography from '@mui/material/Typography';



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
        <main>    
            <section className="artists">
                {artists.map(artist => {
                    return (
                        <div className="artistItem" key={artist.id}>

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

                            <img src={artist.profile_image} alt={artist.name}
                            
                            />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default ArtistsPage;