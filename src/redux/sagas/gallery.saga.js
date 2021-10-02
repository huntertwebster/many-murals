import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// GET GALLERY: fetches all gallery items from the DB
function* fetchGallery() {
    console.log("----Inside the FETCH_GALLERY SAGA----");
    try {
        // passes all items from the server to the payload
        const gallery = yield axios.get('/api/gallery');
        console.log('THE GALLERY :', gallery.data);
        // automatically console.log items after action
        yield put({ type: 'SET_GALLERY', payload: gallery.data });
    } catch (error) {
        console.log('FETCH_GALLERY: Error with getting all items from the gallery:', error);
    }

};
// ADD POST: posts an individual POST to the DB
function* addPost(action) {
    console.log("----Inside the ADD_POST SAGA----", action);
    try {
        // passes all items from the server to the payload 
        yield axios.post('/api/gallery', action.payload);
        // automatically console.log items after action
        yield put({ type: 'FETCH_GALLERY' });
        yield put({ type: 'FETCH_PROFILE' });
    } catch (error) {
        console.log("ADD_POST: Error with posting an item to the gallery:", error);
    }
};

// UPDATE POST: updating a POST (art_item only) from the artists profile
function* editPost(action) {
    console.log("----Inside the UPDATE_POST SAGA----", action);
    try {
        // passes all items from the server to the payload 
        yield axios.put(`/api/gallery/${action.payload.id}`, action.payload);
        // automatically console.log items after action
        yield put({ type: 'FETCH_GALLERY' });
        yield put({ type: 'FETCH_PROFILE' });
    } catch (error) {
        console.log('EDIT_POST: Error with update item of gallery:', error);
    }
}

// DELETE POST: deletes an entire POST from the the gallery made from the artist profile
function* deletePost(action) {
    console.log("----Inside the DELETE_POST SAGA----", action);
    try {
        // passes all items from the server to the payload 
        yield axios.delete(`/api/gallery/${action.payload.id}/${action.payload.user_id}`);
        // automatically console.log items after action
        yield put({ type: 'FETCH_GALLERY' });
        yield put({ type: 'FETCH_PROFILE' });
    } catch (error) {
        console.log('DELETE_POST: Error with delete post from gallery:', error);
    }
}


// ADD PICTURE: posts an individual PICTURE to the DB
function* addPicture(action) {
    console.log("----Inside the ADD_PICTURE SAGA----", action);
    try {
        // passes all items from the server to the payload 
        yield axios.post('/api/gallery/image', action.payload);
        // automatically console.log items after action
        yield put({ type: 'FETCH_GALLERY' });
        yield put({ type: 'FETCH_PROFILE' });
    } catch (error) {
        console.log("ADD_PICTURE: Error with posting a picture to the gallery:", error);
    }
};

// DELETE PICTURE: deletes an individual PICTURE from the artists post
function* deletePicture(action) {
    console.log("----Inside the DELETE_PICTURE SAGA----", action);
    try {
        // passes all items from the server to the payload 
        yield axios.delete(`/api/gallery/image/${action.payload}`);
        // automatically console.log items after action
        yield put({ type: 'FETCH_GALLERY' });
        yield put({ type: 'FETCH_PROFILE' });
    } catch (error) {
        console.log('DELETE_PICTURE:  Error with delete picture of gallery:', error);
    }
}

//watcher saga for gallery
function* gallerySaga() {
    yield takeLatest('FETCH_GALLERY', fetchGallery);
    yield takeLatest('EDIT_POST', editPost);
    yield takeLatest('DELETE_POST', deletePost);
    yield takeLatest('DELETE_PICTURE', deletePicture);
    yield takeLatest('ADD_PICTURE', addPicture);
    yield takeLatest('ADD_POST', addPost);
}

export default gallerySaga;