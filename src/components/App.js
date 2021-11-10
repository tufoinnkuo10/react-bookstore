import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Booksec from './Homepage';
import Categoriessec from '../Redux/categories/categories';
import Nav from './NavBar';

const App = () => {
  const { booksReducer } = useSelector((state) => state);
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Booksec data={booksReducer} />
          </Route>
          <Route exact path="/categories">
            <Categoriessec />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
