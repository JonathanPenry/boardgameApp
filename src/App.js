import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import SearchPage from './Components/Search/SearchPage';
import LoginPage from './Components/Login/LoginPage';
import GamesPage from './Components/Games/GamesPage';
import LocalPage from './Components/Local/LocalPage';
import Store from './redux/Store';
import './App.css';
import UserGames from './Components/UserGames/UserGames.';



function App() {
  return (
    <Provider store={Store}>
      <Router>
        <>
        <header>Header Information</header>
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
            <Route exact path='/usergames' component={UserGames} />
            {/* <Route exact path='/games' component={GamesPage} /> */}
            {/* <Route exact path='/local' component={LocalPage} /> */}
            <Route path="*">
              <Redirect to='/search' />
            </Route>
          </Switch>
        </main>
        <footer className="textCenter">
        <a href="navContainer">&#8679;  Return to the top of the page  &#8679;</a>
        </footer>
        </>
      </Router>
    </Provider>
  );
}

export default App;