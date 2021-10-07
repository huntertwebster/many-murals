import React from 'react';
import Form from '../ArtForm/form';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import CSS for the profile here
// import { useHistory } from 'react-router';



function AdminView() {
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    
    // stores
    const artists = useSelector(store => store.artists);
    const gallery = useSelector(store => store.gallery);
    const profile = useSelector(store => store.profile);
    
    // filter
    // const result = gallery.filter(item => artists.some(artist => item.id === artist.id))
    // console.log('This is the number of items in the gallery:', Number(result));

    // useEffect
    useEffect(() => {
        dispatch({ type: 'FETCH_ARTISTS' });
    }, []);
    
    // function to delete artist
 function deleteArtist(id) {
    console.log('This is the artist:' , id)
     dispatch({
         type: 'DELETE_ARTIST',
         payload: id
     });
    };

return (
      <main>    
          <section className="artists">
            <p>hello, admin!</p>
            <p>below are all the artists</p>
            {artists.map(artist => {
                   
                    return (
                        <div className="artistItem" key={artist.id}>
                            <ul>
                                {/* display the number of items each artist has */}
                                <button onClick={() => deleteArtist(artist.id)}>Delete {artist.name}'s profile</button>

                            </ul>
                        </div>
                    );
                    
                })}
            </section>
        </main>
  );
}

export default AdminView;