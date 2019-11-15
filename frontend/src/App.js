import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Header, FilmList, FilmInfo, NewFilm, MessageBox} from './components';
import store, { fetchData } from './store';

function App() {
  store.dispatch(fetchData())
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main className="container">
          <Switch>
            <Route path="/" exact component={FilmList} />
            <Route path="/film/:id" component={FilmInfo} />
            <Route path="/create" component={NewFilm} />
          </Switch>
        </main>
        <MessageBox />
      </Router>
    </Provider>
  );
}

export default App;
