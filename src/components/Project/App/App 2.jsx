import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import ProtectedRoute from "../Nav/ProtectedRoute";

import AboutPage from "../../Pages/About";
import Profile from "../../Pages/ArtistsAccount/Profile";
import InfoPage from "../../Pages/ArtistsAccount/ProfileMount";
import LandingPage from "../../Login/Registration/LandingPage/LandingPage";
import LoginPage from "../../Login/Registration/Login/LoginPage";
import RegisterPage from "../../Login/Registration/Registration/RegisterPage";
import "./App.css";
import GalleryPage from "../../Pages/Gallery/Gallery";
import ArtistsPage from "../../Pages/Artists/Artists";
import ProfilePage from "../../Pages/ArtistsAccount/ProfileMount";
import EditArtItem from "../../Pages/Forms/EditArtItem";
import AdminView from "../../Pages/Admin";
import Map from "../../Pages/Map/Map";
import CreateAPost from "../../Pages/Forms/CreateArtItem";
import AddImageToArtItem from "../../Pages/Forms/AddImageToArtItem";
import AccountInfo from "../../Pages/ArtistsAccount/EditAccountInformation";
import CreateArtItem from "../../Pages/Forms/CreateArtItem";
import EditAccountInformation from "../../Pages/ArtistsAccount/EditAccountInformation";
import Admin from "../../Pages/Admin";
import Gallery from "../../Pages/Gallery/Gallery";
import About from "../../Pages/About";
import Artists from "../../Pages/Artists/Artists";
import MyMurals from "../../Pages/ArtistsAccount/MyMurals";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: "FETCH_GALLERY" });
    dispatch({ type: "FETCH_ARTISTS" });
    dispatch({ type: "FETCH_PROFILE" });
  }, []);

  return (
    <Router>
      <div>
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
            <About />
          </Route>
          <Route
            // shows GalleryPage at all times (logged in or not)
            exact
            path="/gallery"
          >
            <Gallery />
          </Route>
          <Route
            // shows ArtistsPage at all times (logged in or not)
            exact
            path="/artists"
          >
            <Artists />
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
            Visiting localhost:3000/myaccount will show the Profile if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/myaccount */}
          <ProtectedRoute
            // logged in shows Profile else shows LoginPage
            exact
            path="/myaccount"
          >
            <Profile />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Profile else shows Profile
            exact
            path="/mymurals"
          >
            <MyMurals />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Edit else shows Edit
            exact
            path="/edit/:editId"
          >
            <EditArtItem />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows create else shows create
            exact
            path="/create"
          >
            <CreateArtItem />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows image form
            exact
            path="/addImage/:addImageId"
          >
            <AddImageToArtItem />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows account Information
            exact
            path="/accountInfo"
          >
            <EditAccountInformation />
          </ProtectedRoute>

          {user?.type === "admin" && (
            <ProtectedRoute
              // logged in shows Edit else shows Edit
              exact
              path="/adminView"
            >
              <Admin />
            </ProtectedRoute>
          )}

          <Route exact path="/login">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /myaccount page
              <Redirect to="/myaccount" />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          <Route exact path="/registration">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /myaccount page
              <Redirect to="/myaccount" />
            ) : (
              // Otherwise, show the registration page
              <RegisterPage />
            )}
          </Route>

          <Route exact path="/home">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /myaccount page
              <Redirect to="/myaccount" />
            ) : (
              // Otherwise, show the Landing page
              <LandingPage />
            )}
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <center>
              <h1>404</h1>
            </center>
          </Route>
        </Switch>

        {/* switch for map, if route is exactly map, don't render a footer! */}
        <Switch>
          <Route
            // shows Map at all times (logged in or not)
            exact
            path="/map"
          ></Route>

          <Route>
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
