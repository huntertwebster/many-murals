import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// GET ARTISTS: fetches all artists from the DB
function* fetchArtists() {
    console.log("----Inside the FETCH_ARTISTS SAGA----", action);
    try {
        // passes all items from the server to the payload
        const artists = yield axios.get('/api/artist');
        console.log('ALL THE ARTISTS:', artists.data);
        // automatically console.log items after action
        yield put({ type: 'SET_ARTISTS', payload: artists.data });
    } catch (error) {
        console.log('fetchArtists: get all ARTISTS error', error);
    }

};

// EDIT ARTIST: updating artist profile data
function* updateArtistInfo(action) {
    console.log("----Inside the EDIT_PROFILE SAGA----", action);
    try {
        // passes all items from the server to the payload 
        yield axios.put(`/api/artist/${action.payload}`);
        // automatically console.log items after action
        yield put({ type: 'FETCH_ARTISTS' });
    } catch (error) {
        console.log('updateArtistInfo: Error with editing artist info:', error);
    }
}

// DELETE ARTIST: deletes an artist
function* deleteArtist(action) {
    console.log("----Inside the DELETE_ARTIST SAGA----", action);
    try {
        // passes all items from the server to the payload 
        yield axios.delete(`/api/artist/${action.payload}`);
        // automatically console.log items after action
        yield put({ type: 'FETCH_ARTISTS' });
    } catch (error) {
        console.log('deleteArtist: Error with deleting an artist:', error);
    }
}


// watcher saga for artist saga
function* artistSaga() {
    yield takeLatest('FETCH_ARTISTS', fetchArtists);
    yield takeLatest('EDIT_PROFILE', updateArtistInfo);
    yield takeLatest('DELETE_ARTIST', deleteArtist);
}


export default artistSaga;