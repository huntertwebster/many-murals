import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import CSS for the gallery here
import { useHistory } from 'react-router';
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
                            <h1>Meet {artist.name}!</h1>
                            <p>{artist.description}</p>
                            <img src={artist.profile_image} alt={artist.name}
                                // onClick={() => history.push(`/details/${item.id}`)}
                            />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default ArtistsPage;