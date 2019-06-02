import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import './App.css';
import StreamList from './components/streams/StreamList';
import StreamCreate from './components/streams/StreamCreate';
import StreamShow from './components/streams/StreamShow';
import StreamEdit from './components/streams/StreamEdit';
import StreamDelete from './components/streams/StreamDelete';
import Header from './components/Header';
import history from './history';

function App() {
  return (
    <div className={'ui container'}>
      <Router history={history}>
        <div>
          <Header/>
          <Switch>
            <Route path="/" exact component={StreamList}/>
            <Route path="/streams/new" exact component={StreamCreate}/>
            <Route path="/streams/:id" exact component={StreamShow}/>
            <Route path="/streams/edit/:id" exact component={StreamEdit}/>
            <Route path="/streams/delete/:id" exact component={StreamDelete}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
