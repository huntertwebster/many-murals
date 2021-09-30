import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// fetches all gallery items from the DB
function* fetchProfile() {
    // get gallery from the DB
    try {
        const profile = yield axios.get('/api/clearance');
        console.log('THE PROFILE DATA :', profile.data);
        yield put({ type: 'SET_PROFILE', payload: profile.data });

    } catch {
        console.log('get PROFILE error');
    }

};

function* profileSaga() {
    yield takeLatest('FETCH_PROFILE', fetchProfile);
}

export default profileSaga;