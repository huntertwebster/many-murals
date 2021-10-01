import React from 'react';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function EditPost() {
    const dispatch = useDispatch();
    // const history = useHistory();
   
    const gallery = useSelector(store => store.gallery);
    const [editPost, setEditPost] = useState({ title: 'dog', latitude: '46.915024', longitude: '-96.819524', description: 'big cow big fish', date: '2012-12-12', type: 'mural', url: 'https://www.sonomamag.com/wp-content/uploads/2020/03/maxfield-bala-sonoma-2-scaled.jpg', featured_image: false });
    
    let params = useParams();
    console.log('these be the params:', params)

    // using paramaters 
    let editId = params.editId; 
    console.log(editId);
   let item = gallery.find(item => item.id === Number(editId));
    console.log(`found item: `, item);
    const imageId = item?.images[0].id;
    console.log('this is the image ID:', imageId);
     console.log('this is the art_item_id:', item?.id);
//    Bail out early with a message if the book isnt found
    // if (!item) {
    //     return <h2>Invalid Art Item ID</h2>;
    // }

    //create a map to look over all the images when there are multiple images to be able to update multiple 
    
    function editHandler() {
        dispatch({
            type: 'EDIT_POST',
            payload: {
                //!!!!useparams on the id so it is the one of the picture that i click on!!!!
              id: item.id,
              title: editPost.title,
              latitude : editPost.latitude,
              longitude: editPost.longitude,
              description : editPost.description,
              date: editPost.date,
              type : editPost.type,
              url : editPost.url,
              featured_image: editPost.featured_image,
              image_id: imageId
            }
        })
    // history.push('/profile');
  }
    
 useEffect(() => {
      dispatch({ type: 'FETCH_PROFILE' });
      dispatch({ type: 'FETCH_GALLERY' });
 }, []);
    
    
    return (
        <div>
            <p>Edit your post!</p>
            <form onSubmit={editHandler}>
                {/* create a form for my post */}
                <input onChange={(event) => setEditPost({ ...editPost, title: event.target.value })}
                    type='text' placeholder='Title!' value={editPost.title} />
                            
                <input onChange={(event) => setEditPost({ ...editPost, latitude: event.target.value })}
                    type='text' placeholder='Latitude!' value={editPost.latitude} />
                            
                <input onChange={(event) => setEditPost({ ...editPost, longitude: event.target.value })}
                    type='text' placeholder='Longitude!' value={editPost.longitude} />
                            
                <input onChange={(event) => setEditPost({ ...editPost, description: event.target.value })}
                    type='text' placeholder='Description!' value={editPost.description} />
                            
                <input onChange={(event) => setEditPost({ ...editPost, date: event.target.value })}
                    type='text' placeholder='Date!' value={editPost.date} />
                                
                <input onChange={(event) => setEditPost({ ...editPost, type: event.target.value })}
                    type='text' placeholder='What type of art?' value={editPost.type} />

                <input onChange={(event) => setEditPost({ ...editPost, url: event.target.value })}
                    type='text' placeholder='Url!' value={editPost.url} />
                            
                <input onChange={(event) => setEditPost({ ...editPost, featured_image: event.target.value })}
                    type='text' placeholder='Featured image?' value={editPost.featured_image} />
                                
                <button type="submit" value="Submit">Edit</button>
            </form>
        </div>
    );
}
export default EditPost;