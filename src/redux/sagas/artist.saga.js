import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//fetches all artists from the DB
function* getArtistSaga() {
    // get all artists from the DB
    try {
        const artists = yield axios.get('/api/artist');
        console.log('get all ARTISTS:', artists.data);
        yield put({ type: 'SET_ARTISTS', payload: artists.data });

    } catch {
        console.log('getArtistSaga: get all ARTISTS error');
    }

};

//updating an entire post from the artists profile
function* updatePost(action) {
    try {

        // passes all items from the server to the payload 
        yield axios.delete(`/api/artist/${action.payload}`);

        // automatically log items in after shelf
        yield put({ type: 'FETCH_GALLERY' });

    } catch (error) {
        console.log('deletePost: Error with delete item of gallery:', error);
    }
}

//posts an individual post to the DB
function* addGalleryPost(action) {
    console.log("----Inside the ADD_POST SAGA----", action);
    try {
        yield axios.post('/api/artist', action.payload);
        yield put({ type: 'FETCH_GALLERY' });
    } catch (err) {
        console.log("addPost: Error FETCHING GALLERY for POST", err);
    }
};

// deletes an individual picture from the artists post
function* deletePicture(action) {
    try {

        // passes all items from the server to the payload 
        yield axios.delete(`/api/artist/${action.payload}`);

        // automatically log items in after shelf
        yield put({ type: 'FETCH_GALLERY' });

    } catch (error) {
        console.log('deletePicture: Error with delete picture of gallery:', error);
    }
}


// deletes an entire post from the the gallery made from the artist profile
function* deletePost(action) {
    try {

        // passes all items from the server to the payload 
        yield axios.delete(`/api/artist/${action.payload}`);

        // automatically log items in after shelf
        yield put({ type: 'FETCH_GALLERY' });

    } catch (error) {
        console.log('deletePost: Error with delete item of gallery:', error);
    }
}

// watcher saga for my artist saga
function* artistSaga() {
    yield takeLatest('FETCH_ARTIST', getArtistSaga);
    yield takeLatest('FETCH_GALLERY', updatePost);
    yield takeLatest('FETCH_GALLERY', addGalleryPost);
    yield takeLatest('FETCH_GALLERY', deletePicture);
    yield takeLatest('FETCH_GALLERY', deletePost);
    yield takeLatest('FETCH_GALLERY', updatePost);
}


export default artistSaga;