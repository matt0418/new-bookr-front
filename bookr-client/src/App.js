import React, { useEffect } from 'react';
import './App.css';
import requireAuth from './requireAuth/requireAuth'
import LoginView from './views/LoginView'
import Logout from './components/Logout'
import { withRouter, Route } from 'react-router-dom'
import BookListView from './views/BookListView'
import IndividualBookView from './views/IndividualBookView';
import AddBookView from './views/AddBookView'



function App(props) {


     console.log(props, 'app')

  return (
    <div className="App">
      <Route exact path = "/" component={BookListView}/>
      <Route path = "/book/:id" component={IndividualBookView}/>
      <Route path = "/addbook" component={AddBookView}/>
    </div>
  );
}

export default withRouter(App)

