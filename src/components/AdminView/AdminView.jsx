import React from 'react';
import Form from '../ArtForm/form';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import CSS for the profile here
// import { useHistory } from 'react-router';

// let result = result1.filter(o1 => result2.some(o2 => o1.id === o2.id));


function AdminView() {
const history = useHistory();
const dispatch = useDispatch();
const artists = useSelector(store => store.artists);
const gallery = useSelector(store => store.gallery);
    const result = gallery.filter(o1 => artists.some(o2 => o1.id === o2.id))
    console.log('This is the number of items in the gallery:', Number(result));


    useEffect(() => {
        dispatch({ type: 'FETCH_ARTISTS' });
    }, []);
    
 function deleteArtist(id) {
    console.log('This is the artist:' , id)
        dispatch({
            type: 'DELETE_ARTIST',
          payload: artists[1].id
        })
  }


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

                                <button onClick={() => deleteArtist(artist)}>Delete</button>
                            </ul>
                            
                        </div>
                    );
                })}
            </section>
        </main>
  );
}

export default AdminView;