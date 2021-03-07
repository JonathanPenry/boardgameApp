import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import SearchPage from './Components/Search/SearchPage';
import SignupPage from './Components/Signup/SignupPage';
import LoginPage from './Components/Login/LoginPage';
import GamesPage from './Components/Games/GamesPage';
import LocalPage from './Components/Local/LocalPage';
import Store from './redux/Store';
import './App.css';
import UserGames from './Components/UserGames/UserGames.';
import { Transition } from "react-transition-group";
// import scrolltop from '/shared/scrolltop'



function App() {
  return (
    <Provider store={Store}>
      <Router>
        <>
        <header>
          <h1 className="textCenter">Board Game Connection</h1>
        </header>
        <nav className="navContainer">
          <NavLink to='/login' className="navLink">Login</NavLink>
          <NavLink to='/search' className="navLink">Search</NavLink>
          <NavLink to='/usergames' className="navLink">My Games</NavLink>
          {/* <NavLink to='/games'>My Games</NavLink> */}
          {/* <NavLink to='/local'>Find Players</NavLink> */}
        </nav>
        <main>
          <Switch>
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/search' component={SearchPage} />
            <Route exact path='/signup' component={SignupPage} />
            <Route exact path='/usergames' component={UserGames} />
            {/* <Route exact path='/games' component={GamesPage} /> */}
            {/* <Route exact path='/local' component={LocalPage} /> */}
            <Route path="*">
              <Redirect to='/login' />
            </Route>
          </Switch>
        </main>
        <footer className="textCenter">
        </footer>
        </>
      </Router>
    </Provider>
  );
}

export default App;