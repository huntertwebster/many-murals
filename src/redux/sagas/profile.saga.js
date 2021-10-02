import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// FETCH PROFILE: gets all the information about one artist for their profile
function* fetchProfile() {
    try {
        // passes all items from the server to the payload
        const profile = yield axios.get('/api/clearance');
        console.log('THE PROFILE DATA :', profile.data);
        // automatically console.log items after action
        yield put({ type: 'SET_PROFILE', payload: profile.data });
    } catch (error) {
        console.log('fetch_profile: ERROR fetching profile data:', error);
    }
};

function* profileSaga() {
    yield takeLatest('FETCH_PROFILE', fetchProfile);
}

export default profileSaga;