import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import CSS for the gallery here
import { useHistory } from 'react-router';

function GalleryPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const gallery = useSelector(store => store.gallery);
    // used for when clicked on a poster, movie data is recieved 
    // sends us to /details too

    // when page loads, get all the movies
    useEffect(() => {
        dispatch({ type: 'FETCH_GALLERY' });
    }, []);

    return (
        <main>
            <h1>Welcome to the Gallery</h1>
            
            <section className="gallery">
                {gallery.map(item => {
                    return (
                        <div className="galleryItem" key={item.id}>
                            <img src={item.images[0].url} alt={item.title}
                                // onClick={() => history.push(`/details/${item.id}`)}
                            />
                            <h4>{item.title} by {item.user_name}</h4>
                            <p>{item.description}</p>
                            <p>Created on: {item.date}</p>
                            <p>Lat: {item.latitude}</p>
                            <p>Long: {item.longitude}</p>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default GalleryPage;