import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Booksec from './Homepage';
import Categoriessec from '../Redux/categories/categories';
import Nav from './NavBar';

const App = () => (
  <>
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Booksec />
        </Route>
        <Route exact path="/categories">
          <Categoriessec />
        </Route>
      </Switch>
    </Router>
  </>
);
export default App;
