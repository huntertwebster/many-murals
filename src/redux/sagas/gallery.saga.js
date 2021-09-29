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

//watcher saga for gallery
function* gallerySaga() {
    yield takeLatest('FETCH_GALLERY', fetchGallery);
}

export default gallerySaga;