import React, {Component} from 'react';
import MainPage from '../pages/mainPage';
import CoffeePage from '../pages/coffeePage';
import PleasurePage from '../pages/pleasurePage';
import ContactsPage from '../pages/contactsPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import './footer.sass';
// import './header.sass';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' exact component={MainPage} />
          <Route path='/coffee' component={CoffeePage} />
          <Route path='/pleasure' component={PleasurePage} />
          <Route path='/contacts' component={ContactsPage} />
        </div>        
      </Router>
    );
  } 
}

