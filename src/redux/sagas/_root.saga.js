import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import gallerySaga from './gallery.saga';
import artistSaga from './artist.saga';
import profileSaga from './profile.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    gallerySaga(), // stores all the art data
    profileSaga(), // stores all the artist's data
    artistSaga(), // stores all data on the artist
    loginSaga(), // login saga is now registered
    registrationSaga(), // stores information regarding registering an account
    userSaga(), // stores information regarding clearance and authorization 
  ]);
}
