// import React from 'react';

// // This is one of our simplest components
// // It doesn't have local state,
// // It doesn't dispatch any redux actions or display any part of redux state
// // or even care what the redux state is'

// function GalleryPage() {
//   return (
//     <div className="container">
//       <div>
//         <p>This gallery page is for anyone to read!</p>
//       </div>
//     </div>
//   );
// }



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
                            <p>Is this the featured image?: {item.featured_image}</p>
                            <p>{item.date}</p>
                            <p>{item.description}</p>
                            <p>{item.latitude}</p>
                            <p>{item.longitude}</p>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default GalleryPage;