import React from 'react';
import Form from '../ArtForm/form';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import CSS for the profile here
// import { useHistory } from 'react-router';



function AdminView() {
const history = useHistory();
const dispatch = useDispatch();
const artists = useSelector(store => store.artists);
const gallery = useSelector(store => store.gallery);
    const result = gallery.filter(item => item.length(gallery.id))
    console.log('This is the number of items in the gallery:', Number(result));
    useEffect(() => {
        dispatch({ type: 'FETCH_ARTISTS' });
        dispatch({ type: 'FETCH_GALLERY' });
    }, []);
    
return (
      <main>    
          <section className="artists">
            <p>hello, admin!</p>
            <p>below are all the artists</p>
            {artists.map(artist => {
                     
                    return (
                        <div className="artistItem" key={artist.id}>
                            <ul>
                                <li>{artist.name}: {result}</li>
                                    {/* display the number of items each artist has */}
                            </ul>
                            
                        </div>
                    );
                })}
            </section>
        </main>
  );
}

export default AdminView;


// const history = useHistory();
//     const dispatch = useDispatch();
//     const artists = useSelector(store => store.artists);
//     // used for when clicked on a poster, movie data is recieved 
//     // sends us to /details too
//     console.log(artists);
//     // when page loads, get all the movies
//     useEffect(() => {
//         dispatch({ type: 'FETCH_ARTISTS' });
//     }, []);

//     return (
//         <main>    
//             <section className="artists">
//                 {artists.map(artist => {
//                     return (
//                         <div className="artistItem" key={artist.id}>
//                             <h1>Meet {artist.name}!</h1>
//                             <p>{artist.description}</p>
//                             <img src={artist.profile_image} alt={artist.name}
//                                 // onClick={() => history.push(`/details/${item.id}`)}
//                             />
//                         </div>
//                     );
//                 })}
//             </section>
//         </main>

//     );
// }