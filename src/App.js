import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect, NavLink } from 'react';
import { Provider } from 'react-redux';
import SearchPage from './Components/Search/SearchPage';
import LoginPage from './Components/Login/LoginPage';
import GamesPage from './Components/Games/GamesPage';
import LocalPage from './Components/Local/LocalPage';
import Store from './redux/Store';
import './App.css';


function App() {
  return (
    <Provider store={Store}>
      <Router>
        <>
        <header>Header Information</header>
        <nav>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/search'>Search Board Games</NavLink>
          <NavLink to='/games'>My Games</NavLink>
          <NavLink to='/local'>Find Players</NavLink>
        </nav>
        <main>
          <Switch>
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/search' component={SearchPage} />
            <Route exact path='/games' component={GamesPage} />
            <Route exact path='/local' component={LocalPage} />
            <Route path="*">
              <Redirect to='/search' />
            </Route>
          </Switch>
        </main>
        <footer>Footer Information</footer>
        </>
      </Router>
    </Provider>
  );
}

export default App;