import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header, FilmList, FilmInfo, NewFilm} from './components';
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
      </Router>
    </Provider>
  );
}

export default App;
