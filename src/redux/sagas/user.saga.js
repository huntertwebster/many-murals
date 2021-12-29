import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/user', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

// EDIT USER: updating user account information
function* updateAccountInfo(action) {
  console.log("----Inside the EDIT_ACCOUNT_INFO SAGA----", action);
  try {
    // passes all items from the server to the payload 
    yield axios.put(`/api/artist/${action.payload}`);
    // automatically console.log items after action
    yield put({ type: 'FETCH_USER' });
  } catch (error) {
    console.log('updateArtistInfo: Error with editing user account info:', error);
  }
}

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeLatest('EDIT_ACCOUNT_INFO', updateAccountInfo);
}

export default userSaga;
