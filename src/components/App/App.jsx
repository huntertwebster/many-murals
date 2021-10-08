import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../ProfilePage/ProfilePage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import './App.css';
import GalleryPage from '../GalleryPage/GalleryPage';
import ArtistsPage from '../ArtistsPage/ArtistsPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import EditPost from '../EditPage/EditPage';
import AdminView from '../AdminView/AdminView';
import Map from '../Map/Map'
import CreateAPost from '../CreatePost/CreateAPost';
import ImageForm from '../ArtForm/imageForm';


function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div
      >
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visible to everyone */}
          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>
          <Route
            // shows GalleryPage at all times (logged in or not)
            exact
            path="/gallery"
          >
            <GalleryPage />

          </Route>
          <Route
            // shows ArtistsPage at all times (logged in or not)
            exact
            path="/artists"
          >
            <ArtistsPage />
          </Route>
          <Route
            // shows Map at all times (logged in or not)
            exact
            path="/map"
          >
            <Map />
          </Route>

          

          {/* Visible to a artist after login */}
          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Profile else shows Profile
            exact
            path="/profile"
          >
            <ProfilePage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Edit else shows Edit
            exact
            path="/edit/:editId"
          >
            <EditPost/>
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows create else shows create
            exact
            path="/create"
          >
            <CreateAPost/>
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows image form
            exact
            path="/addImage/:addImageId"
          >
            <ImageForm/>
          </ProtectedRoute>


          {user?.type === "admin" &&
            <ProtectedRoute
            // logged in shows Edit else shows Edit
            exact
            path="/adminView"
          >
            <AdminView/>
          </ProtectedRoute>
          }
          
          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>

        
        {/* switch for map, if route is exactly map, don't render a footer! */}
        <Switch>
          <Route
            // shows Map at all times (logged in or not)
            exact
            path="/map"
          >
          </Route>

          <Route>
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
