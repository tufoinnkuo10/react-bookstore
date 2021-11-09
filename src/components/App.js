import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Booksec from '../Redux/books/books';
import Categoriessec from '../Redux/categories/categories';
import Nav from './NavBar';

const App = () => (
  <>
    <Nav />
    <Switch>
      <Route exact path="/">
        <Booksec />
      </Route>
      <Route exact path="/categories">
        <Categoriessec />
      </Route>
    </Switch>
  </>
);

export default App;