import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//fetches all artists from the DB
function* fetchArtists() {
    // get all artists from the DB
    try {
        const artists = yield axios.get('/api/artist');
        console.log('ALL THE ARTISTS:', artists.data);
        yield put({ type: 'SET_ARTISTS', payload: artists.data });

    } catch {
        console.log('fetchArtists: get all ARTISTS error');
    }

};



//updating artist profile data
function* updateProfile(action) {
    try {
        //PUT NEEDS A BODY on line 24!!!
        // passes all items from the server to the payload 
        yield axios.put(`/api/artist/${action.payload}`);

        // automatically log items in after shelf
        yield put({ type: 'FETCH_ARTISTS' });

    } catch (error) {
        console.log('updatePost: Error with delete item of gallery:', error);
    }
}

// deletes an artist
function* deleteArtist(action) {
    console.log("----Inside the DELETE_ARTIST SAGA----", action);
    try {

        // passes all items from the server to the payload 
        yield axios.delete(`/api/deleteArtist/${action.payload}`);
        yield put({ type: 'FETCH_ARTISTS' });

    } catch (error) {
        console.log('deleteArtist: Error with deleting artist:', error);
    }
}


// watcher saga for my artist saga
function* artistSaga() {
    yield takeLatest('FETCH_ARTISTS', fetchArtists);
    yield takeLatest('EDIT_PROFILE', updateProfile);
    yield takeLatest('DELETE_ARTIST', deleteArtist);
}


export default artistSaga;