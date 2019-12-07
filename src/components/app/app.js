import React, {Component} from 'react';
import MainPage from '../pages/mainPage';
import CoffeePage from '../pages/coffeePage';
import PleasurePage from '../pages/pleasurePage';
import ContactsPage from '../pages/contactsPage';
import ItemPage from '../pages/itemPage';
import NotFoundPage from '../pages/notFoundPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import './footer.sass';
// import './header.sass';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact component={MainPage} />
            <Route path='/coffee' exact component={CoffeePage} />
            <Route path='/coffee/:name' render={
                ({match}) => {
                  const {name} = match.params;
                  return <ItemPage itemName={name}/>
                } 
              }/>
            <Route path='/pleasure' exact component={PleasurePage} />
            <Route path='/contacts' component={ContactsPage} />
            <Route component={NotFoundPage} />
          </Switch>
          
        </div>        
      </Router>
    );
  } 
}

