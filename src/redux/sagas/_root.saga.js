import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import gallerySaga from './gallery.saga';
import artistSaga from './artist.saga';
import profileSaga from './profile.saga';
import mapSaga from './map.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
function* rootSaga() {
  yield all([
    mapSaga(), // stores all data on the map
    artistSaga(), // stores all data on the artist
    profileSaga(), // stores all the data on the artist's information 
    gallerySaga(), // stores all the data on the art
    loginSaga(), // login saga is now registered
    registrationSaga(), // registration saga
    userSaga()
  ]);
}

export default rootSaga;