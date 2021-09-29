import { put } from 'redux-saga/effects';
import axios from 'axios';

// fetches all gallery items from the DB
function* gallerySaga() {
    // get gallery from the DB
    try {
        const gallery = yield axios.get('/api/gallery');
        console.log('get GALLERY :', gallery.data);
        yield put({ type: 'SET_GALLERY', payload: gallery.data });

    } catch {
        console.log('get GALLERY error');
    }

};


export default gallerySaga;