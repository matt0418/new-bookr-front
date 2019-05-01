import React from 'react';
import './App.css';
import { withRouter, Route } from 'react-router-dom'
import BookListView from './views/BookListView'
import IndividualBookView from './views/IndividualBookView';
import AddBookView from './views/AddBookView'
import RegisterView from './views/RegisterView'



function App(props) {
  return (
    <div className="App">
      <Route exact path = "/" component={BookListView}/>
      <Route path = "/book/:id" component={IndividualBookView}/>
      <Route path = "/addbook" component={AddBookView}/>
      <Route path = "/register" component={RegisterView} />
    </div>
  );
}

export default withRouter(App)

