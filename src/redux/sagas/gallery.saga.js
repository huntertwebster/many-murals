import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// fetches all gallery items from the DB
function* fetchGallery() {
    // get gallery from the DB
    try {
        const gallery = yield axios.get('/api/gallery');
        console.log('THE GALLERY :', gallery.data);
        yield put({ type: 'SET_GALLERY', payload: gallery.data });

    } catch {
        console.log('get GALLERY error');
    }

};

//updating an entire post from the artists profile
function* updatePost(action) {
    try {
        // NEEDS A BODY ??
        // passes all items from the server to the payload 
        yield axios.put(`/api/gallery/${action.payload}`);

        // automatically log items in after shelf
        yield put({ type: 'FETCH_GALLERY' });

    } catch (error) {
        console.log('updatePost: Error with delete item of gallery:', error);
    }
}

// deletes an entire post from the the gallery made from the artist profile
function* deletePost(action) {
    try {

        // passes all items from the server to the payload 
        yield axios.delete(`/api/gallery/${action.payload}`);

        // automatically log items in after shelf
        yield put({ type: 'FETCH_GALLERY' });

    } catch (error) {
        console.log('deletePost: Error with delete item of gallery:', error);
    }
}

// deletes an individual picture from the artists post
function* deletePicture(action) {
    try {

        // passes all items from the server to the payload 
        yield axios.delete(`/api/gallery/${action.payload}`);

        // automatically log items in after shelf
        yield put({ type: 'FETCH_GALLERY' });

    } catch (error) {
        console.log('deletePicture: Error with delete picture of gallery:', error);
    }
}


//posts an individual post to the DB
function* addPost(action) {
    console.log("----Inside the ADD_POST SAGA----", action);
    try {
        // NEEDS A BODY ??
        yield axios.post('/api/gallery', action.payload);
        yield put({ type: 'FETCH_GALLERY' });
    } catch (err) {
        console.log("addPost: Error FETCHING GALLERY for POST", err);
    }
};

//watcher saga for gallery
function* gallerySaga() {
    yield takeLatest('FETCH_GALLERY', fetchGallery);
    yield takeLatest('EDIT_POST', updatePost);
    yield takeLatest('DELETE_POST', deletePost);
    yield takeLatest('DELETE_PICTURE', deletePicture);
    yield takeLatest('ADD_POST', addPost);
}

export default gallerySaga;