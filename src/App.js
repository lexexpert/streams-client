import React from 'react';
import { Router, Route} from "react-router-dom";
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
          <Route path="/" exact component={StreamList}/>
          <Route path="/streams/new" exact component={StreamCreate}/>
          <Route path="/streams/show" exact component={StreamShow}/>
          <Route path="/streams/edit" exact component={StreamEdit}/>
          <Route path="/streams/delete" exact component={StreamDelete}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
