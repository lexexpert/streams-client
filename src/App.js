import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import './App.css';
import StreamList from './components/streams/StreamList';
import StreamCreate from './components/streams/StreamCreate';
import StreamShow from './components/streams/StreamShow';
import StreamEdit from './components/streams/StreamEdit';
import StreamDelete from './components/streams/StreamDelete';
import Header from './components/Header';

function App() {
  return (
    <div className={'ui container'}>
      <BrowserRouter>
        <div>
          <Header/>
          <Route path="/" exact component={StreamList}/>
          <Route path="/streams/new" exact component={StreamCreate}/>
          <Route path="/streams/show" exact component={StreamShow}/>
          <Route path="/streams/edit" exact component={StreamEdit}/>
          <Route path="/streams/delete" exact component={StreamDelete}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
