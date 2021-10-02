import { combineReducers } from 'redux';
import errors from '../reducers/errors.reducer';
import user from '../reducers/user.reducer';
import gallery from '../reducers/gallery.reducer';
import artists from '../reducers/artists.reducer';
import profile from '../reducers/profile.reducer'

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  gallery, // contains all the gallery data
  artists, // contains all the data on the artists
  profile // contains the data specific to one artist
});

export default rootReducer;
