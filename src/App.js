import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect, NavLink } from 'react-router-dom';
import SearchPage from './Components/Search/SearchPage';
import SignupPage from './Components/Signup/SignupPage';
import LoginPage from './Components/Login/LoginPage';
import './App.css';
import UserGames from './Components/UserGames/UserGames.';
import { Transition } from "react-transition-group";
// import to show when people are logged in and show nav components based on that
import { useSelectors, useActionCreators } from "use-redux";
import { usernameSelector } from "./redux/selectors";
import { clearUser, setUser } from "./redux/actions";
import loginReducer from './redux/reducers/LoginReducer';
import axios from "axios";

// import scrolltop from '/shared/scrolltop'


// Creating function so that Boardgame_App sees that we're signed in and then will display based on that user.
function App() {
  // Take the username out of state and set it to username
  const [username] = useSelectors(usernameSelector); // Supposed to be in reducers > selectors (CANT FIND)
  const [clearUserFromState, setUserInState] = useActionCreators(clearUser, setUser);

  // UseEffect to get this to run one time and talks to userRoutes in express where "authenticate" is
  // Make a request to the server to see if the cookie is there to know they are signed in
  // Put that into global state to show user things they should see
  useEffect(async () => {
    try {
      // Axios returns all of the data and returns a data key with the actual data coming back. (instead of fetch)
      // Authenticate is in Express under users.routes
      const json = await axios.get("/users/authenticate");
      console.log(json);
      if (json.data.success){
        setUserInState(json.data.data.username)  //not the actual login page. just set to global state
      }
    } catch(err) {}
  }, []);


  return (
      <Router>
        <>
        <header>
          <h1 className="textCenter">Board Game Connection</h1>
        </header>
        <nav className="navContainer">
          <NavLink to='/login' className="navLink">Login</NavLink>
          <NavLink to='/search' className="navLink">Search</NavLink>
          <NavLink to='/usergames' className="navLink">My Games</NavLink>
        </nav>
        <main>
          <Switch>
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/search' component={SearchPage} />
            <Route exact path='/signup' component={SignupPage} />
            <Route exact path='/usergames' component={UserGames} />
            <Route path="*">
              <Redirect to='/login' />
            </Route>
          </Switch>
        </main>
        <footer className="textCenter">
        </footer>
        </>
      </Router>
  );
}

export default App;