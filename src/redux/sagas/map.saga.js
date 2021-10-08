import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchMap() {
    console.log("----Inside the FETCH_MAP SAGA----");
    try {
        // passes all items from the server to the payload
        const map = yield axios.get('/api/map');
        console.log('THE MAP :', map.data);
        // automatically console.log items after action
        yield put({ type: 'SET_MAP', payload: map.data });
    } catch (error) {
        console.log('FETCH_MAP: Error with getting all items from the map:', error);
    }

};

function* mapSaga() {
    yield takeLatest('FETCH_MAP', fetchMap);
}
export default mapSaga;