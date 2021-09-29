import { all } from 'redux-saga/effects';
import gallerySaga from './gallery.saga';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import gallerySaga from './gallery.saga';
import deletePost from './artist.saga';
import addGalleryPost from './artist.saga';
import getArtistSaga from './artist.saga';
import updatePost from './artist.saga';
import deletePicture from './artist.saga';
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    deletePicture(),
    updatePost(),
    deletePost(),
    addGalleryPost(),
    getArtistSaga(),
    gallerySaga(),
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
  ]);
}
